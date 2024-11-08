import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  // Initialize particles instance
  const particlesInit = async (main) => {
    // Loads the full tsparticles bundle
    await loadFull(main);
  };

  // Particle options (you can customize these settings)
  const particlesOptions = {
    background: {
      color: {
        value: "#1C1C1C", // Background color
      },
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#dadada",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 110,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: ["circle", "triangle"],
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default ParticleBackground;
