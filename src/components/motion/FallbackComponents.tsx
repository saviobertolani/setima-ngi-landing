import { ReactNode } from "react";

// Componentes fallback simples para garantir que o conteúdo apareça
interface FallbackProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({ children, className = "", style = {} }: FallbackProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className = "", style = {} }: FallbackProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function StaggerChild({ children, className = "", style = {} }: FallbackProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function ParallaxElement({ children, className = "", style = {} }: FallbackProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function ParallaxImage({ 
  src, 
  className = "", 
  style = {}, 
  alt = "" 
}: { 
  src: string; 
  className?: string; 
  style?: React.CSSProperties; 
  alt?: string; 
}) {
  return (
    <div
      className={className}
      style={{ 
        ...style,
        backgroundImage: `url('${src}')`
      }}
    />
  );
}