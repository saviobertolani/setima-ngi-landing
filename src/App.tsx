import InteractiveDesktop from "./components/InteractiveDesktop";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import { useMemo } from "react";

export default function App() {
  const showDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("debugui") || p.has("debugUI");
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
      <DesktopScaleContainer>
        {({ scale }) => <InteractiveDesktop scale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}
