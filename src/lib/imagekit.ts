// ImageKit configuration
export const IMAGEKIT_CONFIG = {
  urlEndpoint: 'https://ik.imagekit.io/meaas6nsi/',
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
  authenticationEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_AUTH_ENDPOINT || '',
};

// Helper function to get ImageKit URL
export const getImageKitUrl = (path: string, transformations?: string) => {
  const baseUrl = IMAGEKIT_CONFIG.urlEndpoint;
  const transformParam = transformations ? `?tr=${transformations}` : '';
  return `${baseUrl}${path}${transformParam}`;
};

// Common image transformations - High quality for sharp logos
export const IMAGE_TRANSFORMATIONS = {
  // Logo transformations - Maximum quality for sharpness
  logo: 'w-64,h-64,f-auto,q-100',
  logoSmall: 'w-40,h-40,f-auto,q-100',
  logoLarge: 'w-80,h-80,f-auto,q-100',
  
  // Tech logo transformations - High quality
  techLogo: 'w-48,h-48,f-auto,q-100',
  techLogoSmall: 'w-32,h-32,f-auto,q-100',
  
  // General image transformations
  thumbnail: 'w-200,h-200,f-auto,q-95',
  medium: 'w-400,h-400,f-auto,q-95',
  large: 'w-800,h-600,f-auto,q-95',
  
  // WebP format for better performance
  webp: 'f-webp,q-100',
  webpHigh: 'f-webp,q-100',
};

// Image paths mapping
export const IMAGE_PATHS = {
  // Logos
  outerLogo: 'public/assets/outerlogo.png',
  innerLogo: 'public/assets/innerlogo.png',
  logoBgr: 'public/assets/logobgr.png',
  powerProject: 'public/assets/powerproject.png',
  
  // Tech logos
  react: 'public/tech-logos/react.svg',
  nextjs: 'public/tech-logos/nextjs.svg',
  nodejs: 'public/tech-logos/nodejs.svg',
  typescript: 'public/tech-logos/typescript.svg',
  mongodb: 'public/tech-logos/mongodb.svg',
  postgresql: 'public/tech-logos/postgresql.svg',
  prisma: 'public/tech-logos/prisma.svg',
  express: 'public/tech-logos/express.svg',
  aws: 'public/tech-logos/aws.svg',
  vercel: 'public/tech-logos/vercel.svg',
  git: 'public/tech-logos/git.svg',
  figma: 'public/tech-logos/figma.svg',
  flutter: 'public/tech-logos/flutter.svg',
  cpp: 'public/tech-logos/cpp.svg',
  shopify: 'public/tech-logos/shopify.svg',
  stripe: 'public/tech-logos/stripe.svg',
};
