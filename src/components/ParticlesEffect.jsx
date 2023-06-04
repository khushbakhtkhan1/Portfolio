import React, { useEffect } from 'react';
import Particles from 'particles.js';

const ParticlesEffect = () => {
  useEffect(() => {
    // Initialize Particle.js
    const particlesConfig = {
      // Particle configuration options
      // ...
    };

    Particles.init(particlesConfig);

    // Clean up Particle.js when the component unmounts
    return () => {
      Particles.destroy();
    };
  }, []);

  return <div id="particles-container"></div>;
};

export default ParticlesEffect;
