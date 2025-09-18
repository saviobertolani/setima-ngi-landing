import { useInView } from "motion/react";
import { useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: options.threshold || 0.2,
    once: options.triggerOnce !== false, // Default true
    margin: options.margin || "0px 0px -100px 0px"
  });

  return { ref, isInView };
}

// Variantes de animação predefinidas
export const scrollVariants = {
  // Fade in + slide up básico
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 40,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Fade in + slide up com delay
  fadeInUpDelayed: {
    hidden: { 
      opacity: 0, 
      y: 40,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    }
  },

  // Fade in + slide from left
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -60,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Fade in + slide from right
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 60,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Container para stagger children
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // 150ms between each child
        delayChildren: 0.1
      }
    }
  },

  // Child item para stagger
  staggerChild: {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Fade in simples
  fadeIn: {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  },

  // Scale in sutil
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
    }
  }
};