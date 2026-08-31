# Cloudflare Worker deployment

This project serves the Astro site and its breed-AI endpoint from one Cloudflare Worker. Visitors upload a photo directly on the site; they do not install anything or create an account.

## AI model and free allowance

The Worker uses Cloudflare Workers AI's hosted `@cf/microsoft/resnet-50` model. This is a 50-layer deep-learning image classifier trained on ImageNet, including dog-breed classes. Cloudflare's free allocation is 10,000 AI neurons daily. ResNet-50 consumes 228,055 neurons per million images, which is about **43,000 scans per day** before the free daily limit.

No third-party API account, key, or secret is required. The `AI` binding is configured in `wrangler.toml`.

## Deploy

Build the Astro site, then deploy the Worker and its static assets:

```powershell
npm run build
npx wrangler deploy
```

`wrangler.toml` directs `/api/breed` to the Worker while all other paths are served from `dist` globally by Cloudflare.
