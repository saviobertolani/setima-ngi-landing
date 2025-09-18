import { motion } from "motion/react";
import { ReactNode } from "react";
import { useScrollReveal, scrollVariants } from "../hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: keyof typeof scrollVariants;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  margin?: string;
}

export function ScrollReveal({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "",
  style = {},
  threshold = 0.2,
  margin = "0px 0px -100px 0px"
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal({ threshold, margin });

  // Custom variants with delay
  const customVariants = delay > 0 ? {
    hidden: scrollVariants[variant].hidden,
    visible: {
      ...scrollVariants[variant].visible,
      transition: {
        ...scrollVariants[variant].visible.transition,
        delay: delay
      }
    }
  } : scrollVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
  threshold?: number;
  margin?: string;
}

export function StaggerContainer({ 
  children, 
  className = "",
  style = {},
  staggerDelay = 0.15,
  threshold = 0.2,
  margin = "0px 0px -100px 0px"
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollReveal({ threshold, margin });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildProps {
  children: ReactNode;
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerChild({ 
  children, 
  variant = 'fadeInUp',
  className = "",
  style = {}
}: StaggerChildProps) {
  const childVariants = {
    fadeInUp: scrollVariants.staggerChild,
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    }
  };

  return (
    <motion.div
      variants={childVariants[variant]}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}