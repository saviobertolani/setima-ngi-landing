import { useState, useEffect } from 'react';

export interface ParallaxControlsConfig {
  enabled: boolean;
  showDebug: boolean;
  intensity: number;
  showVisualIndicators: boolean;
}

/**
 * Hook para controlar configurações de parallax durante desenvolvimento
 * Usa URL parameters para ativação segura
 */
export function useParallaxControls(): ParallaxControlsConfig & {
  setIntensity: (value: number) => void;
  toggleDebug: () => void;
  toggleVisualIndicators: () => void;
} {
  const [enabled, setEnabled] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [intensity, setIntensity] = useState(0.1);
  const [showVisualIndicators, setShowVisualIndicators] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      
      // Ativa parallax test se tiver o parâmetro na URL
      setEnabled(params.has('parallaxTest'));
      
      // Ativa debug se tiver o parâmetro específico
      setShowDebug(params.has('debugParallax'));
      
      // Permite definir intensidade via URL: ?parallaxTest&intensity=0.15
      const urlIntensity = params.get('intensity');
      if (urlIntensity && !isNaN(Number(urlIntensity))) {
        setIntensity(Math.max(0, Math.min(0.5, Number(urlIntensity))));
      }
      
      // Visual indicators podem ser desabilitados: ?parallaxTest&noIndicators
      setShowVisualIndicators(!params.has('noIndicators'));
    }
  }, []);

  const toggleDebug = () => {
    setShowDebug(prev => !prev);
  };

  const toggleVisualIndicators = () => {
    setShowVisualIndicators(prev => !prev);
  };

  return {
    enabled,
    showDebug,
    intensity,
    showVisualIndicators,
    setIntensity,
    toggleDebug,
    toggleVisualIndicators
  };
}

/**
 * Hook para criar efeitos de parallax com diferentes intensidades
 * baseado nas configurações de controle
 */
export function useControlledParallax(baseSpeed: number, controls: ParallaxControlsConfig) {
  const adjustedSpeed = controls.enabled ? baseSpeed * controls.intensity * 10 : baseSpeed;
  
  return {
    speed: adjustedSpeed,
    enabled: controls.enabled
  };
}

export default useParallaxControls;