import { ReactNode, useState, useEffect } from 'react';

interface DesktopScaleContainerProps {
  children: (props: { scale: number }) => ReactNode;
}

export default function DesktopScaleContainer({ children }: DesktopScaleContainerProps) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      const isMobileSize = width < 768; // Aligned with App.tsx breakpoint
      
      setIsMobile(isMobileSize);
      
      if (!isMobileSize) {
        // Scale for desktop based on width
        const baseWidth = 1440; // Base design width
        const currentScale = Math.min(width / baseWidth, 1);
        setScale(currentScale);
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  // If mobile, don't render anything (App.tsx handles this)
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className="smooth-scaling"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children({ scale })}
    </div>
  );
}