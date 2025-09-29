import React from 'react';
import './DitherBackground.css';

interface DitherBackgroundProps {
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}

export default function DitherBackground({
  waveColor = [0.2, 0.4, 1.0],
  disableAnimation = false,
  enableMouseInteraction = true,
  waveSpeed = 0.03
}: DitherBackgroundProps) {
  const [r, g, b] = waveColor;
  const colorValue = `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;

  return (
    <div 
      className={`dither-background ${!disableAnimation ? 'animated' : ''}`}
      style={{
        '--wave-color': colorValue,
        '--animation-speed': `${30 / waveSpeed}s`
      } as React.CSSProperties}
    >
      <div className="wave-layer wave-1"></div>
      <div className="wave-layer wave-2"></div>
      <div className="wave-layer wave-3"></div>
      <div className="dither-overlay"></div>
    </div>
  );
}