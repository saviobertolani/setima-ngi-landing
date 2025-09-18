// Auto-detect gallery assets exported from Figma and placed under src/assets/figma
// This file is safe when the folder is empty: it simply returns an empty list
// and callers can fall back to existing sources.

type GalleryAssets = {
  images: string[]; // ordered list of image URLs
  mask?: string;    // optional mask URL (e.g., big.svg)
};

export function getGalleryAssets(): GalleryAssets {
  // Match images like src/assets/figma/big/01.png ... 08.png
  const imageModules = import.meta.glob('/src/assets/figma/big/*.{png,jpg,jpeg}', {
    eager: true,
  query: '?url',
  import: 'default',
  }) as Record<string, string>;

  // Optional mask at src/assets/figma/big.svg
  const maskModules = import.meta.glob('/src/assets/figma/big.svg', {
    eager: true,
  query: '?url',
  import: 'default',
  }) as Record<string, string>;

  const keys = Object.keys(imageModules);
  if (!keys.length) return { images: [], mask: Object.values(maskModules)[0] };

  // Sort by numeric file name if present (e.g., 01.png, 02.png ...)
  const sorted = keys.sort((a, b) => {
    const an = a.match(/(\d+)/)?.[1];
    const bn = b.match(/(\d+)/)?.[1];
    if (an && bn) return Number(an) - Number(bn);
    return a.localeCompare(b);
  });

  const images = sorted.map((k) => imageModules[k]);
  const mask = Object.values(maskModules)[0];
  return { images, mask };
}
