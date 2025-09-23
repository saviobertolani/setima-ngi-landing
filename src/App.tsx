import InteractiveDesktop from "./components/InteractiveDesktop";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";
import MobileFigma from "./components/figma/MobileFigma";
import { useMemo } from "react";

export default function App() {
  const showDebug = useMemo(() => {
    if (typeof window === "undefined") return false;
    const p = new URLSearchParams(window.location.search);
    return p.has("debugui") || p.has("debugUI");
  }, []);

  const mode = useMemo(() => {
    if (typeof window === "undefined") return { mobileGetCode: false, desktop: true };
    const p = new URLSearchParams(window.location.search);
    return {
      mobileGetCode: p.has("mobileGetCode") || p.has("mobile_get_code") || p.has("mobile-getcode"),
      desktop: !p.has("mobile") && !p.has("mobileGetCode") && !p.has("mobile_get_code") && !p.has("mobile-getcode"),
    } as const;
  }, []);

  if (mode.mobileGetCode) {
    return (
      <div style={{ display: "flex", justifyContent: "center", background: "#111", minHeight: "100vh" }}>
        <div style={{ width: 402, position: "relative", background: "#fff", minHeight: "100vh" }}>
          <MobileFigma />
        </div>
      </div>
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
          React render OK — try ?desktop para forçar modo desktop
        </div>
      )}
      <DesktopScaleContainer>
        {({ scale }) => <InteractiveDesktop headerScale={scale} />}
      </DesktopScaleContainer>
    </>
  );
}