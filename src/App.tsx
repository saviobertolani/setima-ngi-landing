import InteractiveMobile from "./components/InteractiveMobile";
import MobileFigmaDebug from "./components/figma/MobileFigmaDebug";
import MobileFigmaFixed from "./components/figma/MobileFigmaFixed";
import { useMemo, useState, useEffect, Suspense, lazy } from "react";

// Lazy-load dos componentes de Desktop para evitar parse em tempo de inicialização
const InteractiveDesktop = lazy(() => import("./components/InteractiveDesktop.stub"));
const DesktopScaleContainer = lazy(() => import("./components/motion/DesktopScaleContainer"));

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

  // Flags para visualizar diretamente as variantes geradas pelo get_code
  const mobileGetCode = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("mobileGetCode");
  }, []);

  const mobileDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("mobileDebug");
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
        {mobileGetCode ? (
          <MobileFigmaFixed />
        ) : mobileDebug ? (
          <MobileFigmaDebug />
        ) : (
          <InteractiveMobile />
        )}
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
      <Suspense fallback={null}>
        <DesktopScaleContainer>
          {({ scale }) => <InteractiveDesktop headerScale={scale} />}
        </DesktopScaleContainer>
      </Suspense>
    </>
  );
}
