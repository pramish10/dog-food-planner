export interface BreedInfo {
  name: string;
  category: 'Toy' | 'Small' | 'Medium' | 'Large' | 'Giant';
  avgWeightLbs: [number, number];
  metabolicFactor: number; // multiplier adjustment
  predispositions?: string[];
}

export const CANINE_BREEDS: BreedInfo[] = [
  { name: 'Mixed Breed / Mutts', category: 'Medium', avgWeightLbs: [20, 60], metabolicFactor: 1.0 },
  { name: 'Labrador Retriever', category: 'Large', avgWeightLbs: [55, 80], metabolicFactor: 0.95, predispositions: ['Joint Support', 'Weight Control'] },
  { name: 'French Bulldog', category: 'Small', avgWeightLbs: [18, 28], metabolicFactor: 0.9, predispositions: ['Sensitive Digestion', 'Skin Allergies'] },
  { name: 'German Shepherd', category: 'Large', avgWeightLbs: [50, 90], metabolicFactor: 1.05, predispositions: ['Hip & Joint', 'Digestive Health'] },
  { name: 'Golden Retriever', category: 'Large', avgWeightLbs: [55, 75], metabolicFactor: 0.98, predispositions: ['Skin & Coat', 'Heart Health'] },
  { name: 'Bulldog (English)', category: 'Medium', avgWeightLbs: [40, 55], metabolicFactor: 0.9, predispositions: ['Weight Control', 'Skin Folds'] },
  { name: 'Poodle (Standard)', category: 'Large', avgWeightLbs: [45, 70], metabolicFactor: 1.0, predispositions: ['Coat Health'] },
  { name: 'Poodle (Miniature/Toy)', category: 'Small', avgWeightLbs: [6, 15], metabolicFactor: 1.15, predispositions: ['Dental Health'] },
  { name: 'Beagle', category: 'Small', avgWeightLbs: [20, 30], metabolicFactor: 0.92, predispositions: ['Weight Control'] },
  { name: 'Rottweiler', category: 'Large', avgWeightLbs: [80, 130], metabolicFactor: 1.0, predispositions: ['Joint Support', 'Lean Muscle'] },
  { name: 'German Shorthaired Pointer', category: 'Large', avgWeightLbs: [45, 70], metabolicFactor: 1.2, predispositions: ['High Endurance'] },
  { name: 'Dachshund', category: 'Small', avgWeightLbs: [16, 32], metabolicFactor: 0.95, predispositions: ['Spine & Joint'] },
  { name: 'Pembroke Welsh Corgi', category: 'Small', avgWeightLbs: [24, 30], metabolicFactor: 0.92, predispositions: ['Weight Management', 'Joints'] },
  { name: 'Australian Shepherd', category: 'Medium', avgWeightLbs: [40, 65], metabolicFactor: 1.15, predispositions: ['Agility Energy', 'Coat Shine'] },
  { name: 'Yorkshire Terrier', category: 'Toy', avgWeightLbs: [4, 7], metabolicFactor: 1.25, predispositions: ['Hypoglycemia Prevention', 'Dental Care'] },
  { name: 'Boxer', category: 'Large', avgWeightLbs: [50, 80], metabolicFactor: 1.05, predispositions: ['Cardiac Health', 'Lean Protein'] },
  { name: 'Cavalier King Charles', category: 'Toy', avgWeightLbs: [13, 18], metabolicFactor: 1.0, predispositions: ['Heart Support', 'Sensitive Digestion'] },
  { name: 'Doberman Pinscher', category: 'Large', avgWeightLbs: [60, 100], metabolicFactor: 1.1, predispositions: ['Cardiovascular', 'Muscle Tone'] },
  { name: 'Great Dane', category: 'Giant', avgWeightLbs: [110, 175], metabolicFactor: 0.95, predispositions: ['Rapid Growth Control', 'Joint Care'] },
  { name: 'Siberian Husky', category: 'Medium', avgWeightLbs: [35, 60], metabolicFactor: 1.1, predispositions: ['Metabolic Efficiency', 'Coat Health'] },
  { name: 'Shih Tzu', category: 'Toy', avgWeightLbs: [9, 16], metabolicFactor: 1.05, predispositions: ['Skin Allergies', 'Eye Health'] },
  { name: 'Boston Terrier', category: 'Small', avgWeightLbs: [12, 25], metabolicFactor: 1.0, predispositions: ['Gas Prevention', 'Allergies'] },
  { name: 'Bernese Mountain Dog', category: 'Giant', avgWeightLbs: [70, 115], metabolicFactor: 0.95, predispositions: ['Joint & Hip', 'Anti-Inflammatory'] },
  { name: 'Pomeranian', category: 'Toy', avgWeightLbs: [3, 7], metabolicFactor: 1.25, predispositions: ['Trachea Support', 'Coat Volume'] },
  { name: 'Border Collie', category: 'Medium', avgWeightLbs: [30, 55], metabolicFactor: 1.25, predispositions: ['High Metabolic Burn', 'Joints'] },
  { name: 'Chihuahua', category: 'Toy', avgWeightLbs: [2, 6], metabolicFactor: 1.3, predispositions: ['Metabolic Rate', 'Dental'] },
  { name: 'Cane Corso', category: 'Giant', avgWeightLbs: [90, 120], metabolicFactor: 1.0, predispositions: ['Musculoskeletal', 'Bone Density'] },
  { name: 'Bichon Frise', category: 'Small', avgWeightLbs: [12, 18], metabolicFactor: 1.05, predispositions: ['Urinary Tract', 'Allergies'] }
];
