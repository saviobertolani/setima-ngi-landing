import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type DesktopScaleContainerProps = {
  children: React.ReactNode | ((ctx: { scale: number }) => React.ReactNode);
  baseWidth?: number; // largura original do design (px)
  minDesktopWidth?: number; // largura mínima para considerar desktop
};

/**
 * Container que escala o conteúdo baseado em uma largura base (default 1440px),
 * centraliza horizontalmente e ajusta a altura externa para permitir scroll correto.
 * Em telas menores que minDesktopWidth, mostra um aviso (mobile em construção).
 */
export default function DesktopScaleContainer({
  children,
  baseWidth = 1440,
  minDesktopWidth = 768,
}: DesktopScaleContainerProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [outerHeight, setOuterHeight] = useState<number>(0);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  const recompute = useCallback(() => {
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    const width = vv?.width ?? window.innerWidth;
  const params = new URLSearchParams(window.location.search);
  const forceDesktop = params.has('desktop');
  const isMobile = width < minDesktopWidth && !forceDesktop;
    setIsMobileWidth(isMobile);

    // Escala baseada apenas na largura para manter a proporção vertical e permitir scroll.
    const newScale = Math.min(width / baseWidth, 1);
    setScale(newScale);

    // Medir conteúdo interno sem aplicar escala duas vezes.
    if (innerRef.current) {
      const node = innerRef.current;
      // Usa métricas não escaladas (offsetTop/offsetHeight)
      let maxBottom = node.scrollHeight || 0;
      node.querySelectorAll<HTMLElement>(":scope *").forEach((el) => {
        const bottom = (el.offsetTop || 0) + (el.offsetHeight || 0);
        if (!Number.isNaN(bottom)) maxBottom = Math.max(maxBottom, bottom);
      });
      const effectiveHeight = Math.max(node.scrollHeight, maxBottom);
      setOuterHeight(Math.ceil(effectiveHeight * newScale));
    }
  }, [baseWidth, minDesktopWidth]);

  useLayoutEffect(() => {
    recompute();
  }, [recompute]);

  useEffect(() => {
    const ro = new ResizeObserver(() => recompute());
    if (innerRef.current) ro.observe(innerRef.current);

    const onResize = () => {
      // Usa rAF para evitar múltiplos cálculos durante o zoom
      requestAnimationFrame(recompute);
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    // Monitorar visualViewport para zoom
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    if (vv) vv.addEventListener('resize', onResize, { passive: true } as any);
    if (vv) vv.addEventListener('scroll', onResize, { passive: true } as any);
    return () => {
      window.removeEventListener("resize", onResize as any);
      window.removeEventListener("orientationchange", onResize as any);
      if (vv) vv.removeEventListener('resize', onResize as any);
      if (vv) vv.removeEventListener('scroll', onResize as any);
      ro.disconnect();
    };
  }, [recompute]);

  // Em telas menores, não bloqueia: apenas permite escala automática do conteúdo desktop.
  // Mantemos isMobileWidth apenas para eventual telemetria/ajustes visuais, sem bloquear render.

  const content = typeof children === 'function' ? children({ scale }) : children;

  return (
    <div
      className="responsive-design smooth-scaling w-full flex justify-center"
      style={{
        minHeight: outerHeight && outerHeight > 0 ? outerHeight : "100vh",
        /* Evita que transforms no ancestral influenciem elementos fixed do portal */
        transform: 'none'
      }}
    >
      {/* Wrapper que define a altura de scroll correta */}
      <div
        style={{ minHeight: outerHeight && outerHeight > 0 ? outerHeight : "100vh" }}
        className="w-full flex justify-center"
      >
        {/* Conteúdo com largura base e escala aplicada */}
  <div
          ref={innerRef}
          style={{
            width: baseWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
