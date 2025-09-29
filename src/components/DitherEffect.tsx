import React from 'react';
import './DitherEffect.css';

interface DitherEffectProps {
  className?: string;
}

const DitherEffect: React.FC<DitherEffectProps> = ({ className = '' }) => {
  return (
    <div className={`dither-effect ${className}`}>
      <div className="dither-layer dither-layer-1"></div>
      <div className="dither-layer dither-layer-2"></div>
      <div className="dither-layer dither-layer-3"></div>
      <div className="dither-overlay"></div>
    </div>
  );
};

export default DitherEffect;