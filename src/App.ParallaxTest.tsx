import InteractiveDesktop from "./components/InteractiveDesktop";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import { useMemo } from "react";

export default function App() {
  const showDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("debugui") || p.has("debugUI");
  }, []);

  const showParallaxTest = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("parallaxTest");
  }, []);

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
          React render OK — try ?desktop para forçar modo desktop
        </div>
      )}
      
      {showParallaxTest && (
        <div
          style={{
            position: "fixed",
            left: 8,
            top: 8,
            zIndex: 100000,
            background: "rgba(0,245,185,0.9)",
            color: "#000",
            padding: "8px 12px",
            borderRadius: 8,
            fontSize: 12,
            lineHeight: "16px",
            pointerEvents: "none",
            fontWeight: "bold"
          }}
        >
          🧪 PARALLAX TEST MODE ATIVO
          <div style={{ fontSize: 10, fontWeight: "normal", marginTop: 2 }}>
            Adicione &debugParallax para controles
          </div>
        </div>
      )}
      
      <DesktopScaleContainer>
        {({ scale }) => <InteractiveDesktop headerScale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}