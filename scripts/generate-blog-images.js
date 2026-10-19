import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogImagesDir = path.resolve(__dirname, '../public/images/blog');

async function processBlogImages() {
  if (!fs.existsSync(blogImagesDir)) {
    console.error('Blog images directory does not exist:', blogImagesDir);
    return;
  }

  const files = fs.readdirSync(blogImagesDir);
  // Find primary webp images (exclude existing -400w, -600w, -680w variants)
  const masterImages = files.filter(f => f.endsWith('.webp') && !f.includes('-400w') && !f.includes('-600w') && !f.includes('-680w'));

  console.log(`Found ${masterImages.length} master blog images to process in ${blogImagesDir}...`);

  for (const file of masterImages) {
    const baseName = file.replace(/\.webp$/, '');
    const srcPath = path.join(blogImagesDir, file);

    const out400 = path.join(blogImagesDir, `${baseName}-400w.webp`);
    const out600 = path.join(blogImagesDir, `${baseName}-600w.webp`);
    const out680 = path.join(blogImagesDir, `${baseName}-680w.webp`);

    // Generate 400w variant
    await sharp(srcPath).resize({ width: 400 }).webp({ quality: 80 }).toFile(out400);

    // Generate 600w variant if missing
    if (!fs.existsSync(out600)) {
      await sharp(srcPath).resize({ width: 600 }).webp({ quality: 80 }).toFile(out600);
    }

    // Generate 680w variant (target for mobile DPR 1.75 displayed at 380px)
    await sharp(srcPath).resize({ width: 680 }).webp({ quality: 80 }).toFile(out680);

    console.log(`✓ Processed ${baseName} (400w, 600w, 680w)`);
  }

  console.log('All responsive blog images generated successfully!');
}

processBlogImages().catch(err => {
  console.error('Error generating blog images:', err);
  process.exit(1);
});
