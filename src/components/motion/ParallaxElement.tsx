import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // Negative = moves slower, Positive = moves faster
  className?: string;
  style?: React.CSSProperties;
  offset?: [string, string]; // Start and end scroll positions
}

export function ParallaxElement({ 
  children, 
  speed = -0.5, 
  className = "", 
  style = {},
  offset = ["start end", "end start"]
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  });

  // Transform scroll progress to Y movement
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxImageProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  alt?: string;
}

export function ParallaxImage({ 
  src, 
  className = "", 
  style = {}, 
  speed = -0.3,
  alt = ""
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        y, 
        ...style,
        backgroundImage: `url('${src}')`,
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden'
      }}
    />
  );
}