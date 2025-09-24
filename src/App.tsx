import InteractiveDesktop from "./components/InteractiveDesktop";
import InteractiveMobile from "./components/InteractiveMobile";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import MobileFigmaDebug from "./components/figma/MobileFigmaDebug";
import { useMemo, useState, useEffect } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  const showDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("debugui") || p.has("debugUI");
  }, []);

  const forceDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("desktop");
  }, []);

  const forceMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("mobile");
  }, []);
  
  const footerFixed = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("footerFixed");
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      const isSmallScreen = window.innerWidth < 768; // usa apenas largura
      setIsMobile(forceMobile || (!forceDesktop && isSmallScreen));
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [forceDesktop, forceMobile]);

  if (isMobile) {
    return (
      <>
        {showDebug && (
          <div
            style={{
              position: "fixed",
              left: 8,
              bottom: 8,
              zIndex: 100000,
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
              lineHeight: "16px",
              pointerEvents: "none",
            }}
          >
            Mobile render OK — try ?desktop para forçar modo desktop
          </div>
        )}
        <InteractiveMobile />
      </>
    );
  }

  return (
    <>
      {showDebug && (
        <div
          style={{
            position: "fixed",
            left: 8,
            bottom: 8,
            zIndex: 100000,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: 6,
            fontSize: 12,
            lineHeight: "16px",
            pointerEvents: "none",
          }}
        >
          Desktop render OK — try ?desktop para forçar modo desktop
        </div>
      )}
      <DesktopScaleContainer footerFixed={footerFixed}>
        {({ scale }) => <InteractiveDesktop scale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}
