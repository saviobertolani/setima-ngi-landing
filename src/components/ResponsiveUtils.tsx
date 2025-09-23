// Utility functions for responsive design
export const getResponsiveValue = (mobile: string | number, tablet?: string | number, desktop?: string | number) => {
  if (typeof window === 'undefined') return mobile;
  
  const width = window.innerWidth;
  
  if (width < 768) return mobile;
  if (width < 1024 && tablet) return tablet;
  if (desktop) return desktop;
  
  return tablet || mobile;
};

export const getResponsivePadding = () => {
  return 'clamp(16px, 6vw, 24px)';
};

export const getFullBleedStyles = () => ({
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
  overflow: 'hidden'
});

export const getResponsiveContainer = (maxWidth: string = '402px') => ({
  width: '100%',
  maxWidth: `min(${maxWidth}, 100vw)`,
  margin: '0 auto'
});