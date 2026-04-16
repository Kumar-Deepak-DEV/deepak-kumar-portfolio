import React, { useState, useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const NebulaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x38bdf8, // Sky 400
          midtoneColor: 0x818cf8, // Indigo 400
          lowlightColor: 0x020617, // Deep Slate
          baseColor: 0x0f172a, // Slate 900
          blurFactor: 0.45,
          speed: 1.2,
          zoom: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 z-[-3] w-full h-full bg-slate-950"></div>;
};

export default NebulaBackground;
