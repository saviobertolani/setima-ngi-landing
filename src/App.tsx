import React from "react";
import InteractiveDesktop from "./components/InteractiveDesktop";
import InteractiveMobile from "./components/InteractiveMobile";
import MobileFigma from "./components/figma/MobileFigma";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import { useMemo } from "react";

export default function App() {
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

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const useGetCode = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("get_code");
  }, []);
  React.useEffect(() => {
    const compute = () => {
      if (forceDesktop) return false;
      if (forceMobile) return true;
      return window.innerWidth <= 480;
    };
    const check = () => setIsMobile(compute());
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [forceDesktop, forceMobile]);

  if (isMobile === undefined) return null;

  if (isMobile) {
    return useGetCode ? <MobileFigma /> : <InteractiveMobile />;
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
          React render OK — use ?mobile para forçar mobile ou ?desktop para forçar desktop
        </div>
      )}
      <DesktopScaleContainer>
        {({ scale }) => <InteractiveDesktop headerScale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}