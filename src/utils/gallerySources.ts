// Auto-detect gallery assets exported from Figma and placed under src/assets/figma
// This file is safe when the folder is empty: it simply returns an empty list
// and callers can fall back to existing sources.

type GalleryAssets = {
  images: string[]; // ordered list of big image URLs
  thumbs: string[]; // ordered list of thumbnail URLs
  mask?: string;    // optional mask URL (e.g., big.svg)
};

export function getGalleryAssets(): GalleryAssets {
  // Match images like src/assets/figma/big/01.png ... 08.png
  const imageModules = import.meta.glob('/src/assets/figma/big/*.{png,jpg,jpeg}', {
    eager: true,
  query: '?url',
  import: 'default',
  }) as Record<string, string>;

  // Match thumbnails like src/assets/figma/thumbs/01.png ... 08.png
  const thumbModules = import.meta.glob('/src/assets/figma/thumbs/*.{png,jpg,jpeg}', {
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
  const thumbKeys = Object.keys(thumbModules);
  if (!keys.length) return { images: [], thumbs: [], mask: Object.values(maskModules)[0] };

  // Sort by numeric file name if present (e.g., 01.png, 02.png ...)
  const sorted = keys.sort((a, b) => {
    const an = a.match(/(\d+)/)?.[1];
    const bn = b.match(/(\d+)/)?.[1];
    if (an && bn) return Number(an) - Number(bn);
    return a.localeCompare(b);
  });

  const images = sorted.map((k) => imageModules[k]);

  // Sort thumbs using same numeric strategy
  const sortedThumbs = thumbKeys.sort((a, b) => {
    const an = a.match(/(\d+)/)?.[1];
    const bn = b.match(/(\d+)/)?.[1];
    if (an && bn) return Number(an) - Number(bn);
    return a.localeCompare(b);
  });
  const thumbs = sortedThumbs.map((k) => thumbModules[k]);
  const mask = Object.values(maskModules)[0];
  return { images, thumbs, mask };
}
