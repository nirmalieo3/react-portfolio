import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 800,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.09,
          },
          move: {
            direction: "random",
            speed: 0.8
          },
          size: {
            value: 2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
            },
          },
        },
        
        retina_detect: true,
      }}
    />
  );
}

export default Particle;