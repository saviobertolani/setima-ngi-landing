import InteractiveDesktop from "./components/InteractiveDesktop";
import InteractiveMobile from "./components/InteractiveMobile";
import DesktopScaleContainer from "./components/DesktopScaleContainer";
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

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(forceMobile || (!forceDesktop && (isMobileUserAgent || isSmallScreen)));
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
          Desktop render OK — try ?mobile para forçar modo mobile
        </div>
      )}
      <DesktopScaleContainer>
        {({ scale }) => (
          <div style={{ 
            padding: '20px',
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#131A1A',
            color: '#FFFFFF',
            fontFamily: 'Ubuntu, sans-serif'
          }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
              Sétima Desktop Version
            </h1>
            <p style={{ fontSize: '24px', marginBottom: '20px' }}>
              Scale: {scale.toFixed(2)}
            </p>
            <p style={{ fontSize: '18px', opacity: 0.7 }}>
              Add ?mobile to URL to see mobile version
            </p>
          </div>
        )}
      </DesktopScaleContainer>
    </>
  );
}