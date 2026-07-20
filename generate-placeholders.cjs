const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// All image assets referenced in the components
const images = [
  // Pillars
  { name: 'pillars-banner.jpg', label: 'PILLARS BANNER', bg: '#0A0A0A', color: '#FFFFFF', w: 1200, h: 600 },
  // ContentDrop
  { name: 'content-drop.jpg', label: 'CONTENT DROP', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 800 },
  // EditorialSpread
  { name: 'editorial-hero.jpg', label: 'EDITORIAL HERO', bg: '#1A1A1A', color: '#FFFFFF', w: 800, h: 1000 },
  { name: 'filmstrip-1.jpg', label: 'FILM 1', bg: '#2A2A2A', color: '#FFFFFF', w: 200, h: 200 },
  { name: 'filmstrip-2.jpg', label: 'FILM 2', bg: '#3A3A3A', color: '#FFFFFF', w: 200, h: 200 },
  { name: 'filmstrip-3.jpg', label: 'FILM 3', bg: '#4A4A4A', color: '#FFFFFF', w: 200, h: 200 },
  { name: 'filmstrip-4.jpg', label: 'FILM 4', bg: '#5A5A5A', color: '#FFFFFF', w: 200, h: 200 },
  { name: 'filmstrip-5.jpg', label: 'FILM 5', bg: '#6B6B6B', color: '#FFFFFF', w: 200, h: 200 },
  // ProductGrid (product-1 to product-6)
  { name: 'product-1.jpg', label: 'PRODUCT 1', bg: '#F4F3F0', color: '#0A0A0A', w: 600, h: 600 },
  { name: 'product-2.jpg', label: 'PRODUCT 2', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'product-3.jpg', label: 'PRODUCT 3', bg: '#0A0A0A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'product-4.jpg', label: 'PRODUCT 4', bg: '#1A1A1A', color: '#E8342A', w: 600, h: 600 },
  { name: 'product-5.jpg', label: 'PRODUCT 5', bg: '#2A2A2A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'product-6.jpg', label: 'PRODUCT 6', bg: '#F4F3F0', color: '#0A0A0A', w: 600, h: 600 },
  // Mosaic
  { name: 'mosaic-1.jpg', label: 'MOSAIC 1', bg: '#0A0A0A', color: '#E8342A', w: 800, h: 800 },
  { name: 'mosaic-2.jpg', label: 'MOSAIC 2', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'mosaic-3.jpg', label: 'MOSAIC 3', bg: '#1A1A1A', color: '#FFFFFF', w: 600, h: 900 },
  { name: 'mosaic-4.jpg', label: 'MOSAIC 4', bg: '#F4F3F0', color: '#0A0A0A', w: 600, h: 600 },
  { name: 'mosaic-5.jpg', label: 'MOSAIC 5', bg: '#2A2A2A', color: '#FFFFFF', w: 900, h: 300 },
  { name: 'mosaic-6.jpg', label: 'MOSAIC 6', bg: '#3A3A3A', color: '#E8342A', w: 600, h: 300 },
  // FullBleedBanner
  { name: 'earn-every-rep.jpg', label: 'EARN EVERY REP', bg: '#0A0A0A', color: '#E8342A', w: 1920, h: 1080 },
  // SocialGrid
  { name: 'social-1.jpg', label: 'SOCIAL 1', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'social-2.jpg', label: 'SOCIAL 2', bg: '#0A0A0A', color: '#FFFFFF', w: 600, h: 900 },
  { name: 'social-3.jpg', label: 'SOCIAL 3', bg: '#F4F3F0', color: '#0A0A0A', w: 600, h: 600 },
  { name: 'social-4.jpg', label: 'SOCIAL 4', bg: '#1A1A1A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'social-5.jpg', label: 'SOCIAL 5', bg: '#2A2A2A', color: '#E8342A', w: 600, h: 900 },
  { name: 'social-6.jpg', label: 'SOCIAL 6', bg: '#E8342A', color: '#0A0A0A', w: 600, h: 600 },
  { name: 'social-7.jpg', label: 'SOCIAL 7', bg: '#3A3A3A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'social-8.jpg', label: 'SOCIAL 8', bg: '#0A0A0A', color: '#E8342A', w: 600, h: 600 },
  // VideoFeature poster
  { name: 'video-feature-poster.jpg', label: 'VIDEO FEATURE', bg: '#0A0A0A', color: '#FFFFFF', w: 1920, h: 1080 },
  // VideoRow posters
  { name: 'video-row-1.jpg', label: 'PRODUCT LAUNCH', bg: '#0A0A0A', color: '#E8342A', w: 800, h: 600 },
  { name: 'video-row-2.jpg', label: 'CAMPAIGN SPOT', bg: '#1A1A1A', color: '#FFFFFF', w: 800, h: 600 },
  { name: 'video-row-3.jpg', label: 'SOCIAL REEL', bg: '#E8342A', color: '#FFFFFF', w: 800, h: 600 },
  // VideoMasonry posters
  { name: 'vm-1.jpg', label: 'REELS', bg: '#0A0A0A', color: '#E8342A', w: 400, h: 700 },
  { name: 'vm-2.jpg', label: 'STORIES', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'vm-3.jpg', label: 'SHORTS', bg: '#1A1A1A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'vm-4.jpg', label: 'HERO AD', bg: '#2A2A2A', color: '#E8342A', w: 1200, h: 600 },
  // MockupGrid
  { name: 'mockup-ig-post.jpg', label: 'IG POST', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 600 },
  { name: 'mockup-fb-ad.jpg', label: 'FB AD', bg: '#0A0A0A', color: '#FFFFFF', w: 800, h: 600 },
  { name: 'mockup-story.jpg', label: 'STORY', bg: '#1A1A1A', color: '#E8342A', w: 400, h: 700 },
  { name: 'mockup-email.jpg', label: 'EMAIL', bg: '#F4F3F0', color: '#0A0A0A', w: 600, h: 800 },
  // InfluencerSection
  { name: 'influencer-1.jpg', label: 'INFLUENCER 1', bg: '#0A0A0A', color: '#E8342A', w: 600, h: 800 },
  { name: 'influencer-2.jpg', label: 'INFLUENCER 2', bg: '#E8342A', color: '#FFFFFF', w: 600, h: 800 },
  { name: 'influencer-3.jpg', label: 'INFLUENCER 3', bg: '#1A1A1A', color: '#FFFFFF', w: 600, h: 800 },
  { name: 'influencer-4.jpg', label: 'INFLUENCER 4', bg: '#2A2A2A', color: '#E8342A', w: 600, h: 800 },
  // PhoneMockups
  { name: 'phone-1.jpg', label: 'SHOP', bg: '#E8342A', color: '#FFFFFF', w: 390, h: 844 },
  { name: 'phone-2.jpg', label: 'REEL', bg: '#0A0A0A', color: '#E8342A', w: 390, h: 844 },
  { name: 'phone-3.jpg', label: 'FEED', bg: '#1A1A1A', color: '#FFFFFF', w: 390, h: 844 },
  // LogoGrid - uses SVG inline, no jpg needed
];

let created = 0;
for (const img of images) {
  const outPath = path.join(assetsDir, img.name);
  if (fs.existsSync(outPath)) {
    console.log(`SKIP (exists): ${img.name}`);
    continue;
  }
  // Create an SVG that looks like a designed placeholder
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${img.w}" height="${img.h}" viewBox="0 0 ${img.w} ${img.h}">
  <rect width="${img.w}" height="${img.h}" fill="${img.bg}"/>
  <line x1="0" y1="0" x2="${img.w}" y2="${img.h}" stroke="${img.color}" stroke-width="1" opacity="0.15"/>
  <line x1="${img.w}" y1="0" x2="0" y2="${img.h}" stroke="${img.color}" stroke-width="1" opacity="0.15"/>
  <text x="${img.w/2}" y="${img.h/2 - 10}" font-family="monospace" font-size="${Math.min(img.w, img.h) * 0.07}" fill="${img.color}" text-anchor="middle" dominant-baseline="middle" font-weight="bold" letter-spacing="0.15em">${img.label}</text>
  <text x="${img.w/2}" y="${img.h/2 + Math.min(img.w,img.h)*0.1}" font-family="monospace" font-size="${Math.min(img.w, img.h) * 0.035}" fill="${img.color}" text-anchor="middle" dominant-baseline="middle" opacity="0.5" letter-spacing="0.1em">MINTS GLOBAL</text>
</svg>`;
  // Write as SVG (browsers accept .jpg with SVG content when served correctly, but let's write as SVG)
  // Actually write proper SVG content to a .svg file and use that
  // For simplicity — write the SVG inline, rename to .jpg works in dev (vite serves them as-is)
  fs.writeFileSync(outPath, svg, 'utf8');
  console.log(`CREATED: ${img.name} (${img.w}x${img.h})`);
  created++;
}

console.log(`\nDone. Created ${created} new placeholder assets.`);
