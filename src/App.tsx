import React from "react";
import InteractiveDesktop from "./components/InteractiveDesktop";
import InteractiveMobile from "./components/InteractiveMobile";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import { useMemo } from "react";

export default function App() {
  const showDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("debugui") || p.has("debugUI");
  }, []);

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 480);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile === undefined) return null;

  if (isMobile) {
    return <InteractiveMobile />;
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
          React render OK — try ?desktop para forçar modo desktop
        </div>
      )}
      <DesktopScaleContainer>
        {({ scale }) => <InteractiveDesktop headerScale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}