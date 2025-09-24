import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type DesktopScaleContainerProps = {
  children: React.ReactNode | ((ctx: { scale: number }) => React.ReactNode);
  baseWidth?: number; // largura original do design (px)
  minDesktopWidth?: number; // largura mínima para considerar desktop
  footerFixed?: boolean; // se o footer deve ser fixado na parte inferior
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
  footerFixed = false,
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

    // Medir conteúdo interno e ajustar a altura externa escalada.
    if (innerRef.current) {
      const node = innerRef.current;
      // Base rect do container interno (não escalado)
      const baseRect = node.getBoundingClientRect();
      let maxBottom = baseRect.bottom;
      // Captura a maior borda inferior entre filhos (inclui elementos absolutos)
      node.querySelectorAll<HTMLElement>(":scope > *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!Number.isNaN(r.bottom)) {
          maxBottom = Math.max(maxBottom, r.bottom);
        }
      });
      // Altura efetiva não escalada
      let effectiveHeight = Math.max(node.scrollHeight, maxBottom - baseRect.top);
      
      // Verificar se footerFixed está presente via props ou URL
      const params = new URLSearchParams(window.location.search);
      const isFooterFixed = footerFixed || params.has('footerFixed');
      
      // Se o footer estiver fixo, limitar a altura efetiva para não ultrapassar o espaço disponível
      if (isFooterFixed) {
        // Buscar footer real para medição precisa
        const footerElement = document.querySelector('footer') || 
                             document.querySelector('[data-name="Bloco 08"]');
        
        // Usar altura real do footer se disponível
        let footerHeight = 172 * newScale; // valor padrão
        
        if (footerElement) {
          const footerRect = footerElement.getBoundingClientRect();
          footerHeight = footerRect.height;
        }
        
        const viewportHeight = window.innerHeight;
        const maxContentHeight = viewportHeight - footerHeight;
        
        // Garantir que o conteúdo não ultrapasse o espaço disponível
        effectiveHeight = Math.min(effectiveHeight, maxContentHeight / newScale);
      }
      
      setOuterHeight(Math.ceil(effectiveHeight * newScale));
    }
  }, [baseWidth, minDesktopWidth, footerFixed]);

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
