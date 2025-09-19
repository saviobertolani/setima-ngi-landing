// Auto-detecta imagens da galeria em src/assets/gallery
// Compatível quando as pastas estão vazias: retorna lista vazia para fallback do chamador.

export type GalleryAssets = {
  images: string[];   // imagens principais (big)
  thumbs?: string[];  // miniaturas (mesma ordem de images). Se ausente, usar images
  mask?: string;      // máscara opcional
};

function sortByNumericKey(paths: string[]): string[] {
  return [...paths].sort((a, b) => {
    const an = a.match(/(\d+)/)?.[1];
    const bn = b.match(/(\d+)/)?.[1];
    if (an && bn) return Number(an) - Number(bn);
    return a.localeCompare(b);
  });
}

export function getGalleryAssets(): GalleryAssets {
  // Novas pastas: src/assets/gallery/big e src/assets/gallery/thumbs
  const bigModules = import.meta.glob('/src/assets/gallery/big/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>;

  const thumbModules = import.meta.glob('/src/assets/gallery/thumbs/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>;

  // Máscara opcional mantida para compatibilidade: src/assets/figma/big.svg
  const maskModules = import.meta.glob('/src/assets/figma/big.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>;

  const bigKeys = Object.keys(bigModules);
  const thumbKeys = Object.keys(thumbModules);

  if (!bigKeys.length) {
    return { images: [], mask: Object.values(maskModules)[0] };
  }

  const sortedBig = sortByNumericKey(bigKeys);
  const sortedThumbs = sortByNumericKey(thumbKeys);

  const images = sortedBig.map((k) => bigModules[k]);
  let thumbs = sortedThumbs.map((k) => thumbModules[k]);

  // Se número de thumbs não bate, usa big como fallback
  if (thumbs.length !== images.length) {
    thumbs = images.slice(0, images.length);
  }

  const mask = Object.values(maskModules)[0];
  return { images, thumbs, mask };
}
