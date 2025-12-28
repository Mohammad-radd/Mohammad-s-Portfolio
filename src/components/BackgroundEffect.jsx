import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function BackgroundEffect(){
  const [init, setInit] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);

      // کمی تاخیر برای انیمیشن ظاهر شدن
      setTimeout(() => setFadeIn(true), 50);
    });
  }, []);


  const option = useMemo(() => ({
    background: { color: { value: "" } },
    fpsLimit: 60,

    opacity: {
      value: { min: 0.0, max: 1 }, // از صفر تا ۱
      random: true,

    anim: {
      enable: true,
      speed: 0.2,    // آرام‌تر
      opacity_min: 0,
      sync: false,
    },
  },

    particles: {
      number: { value: 100 },
      color: { value: "#ffffff" },

      shadow: {
        enable: true,
        blur: 8,
        color: "#ffffff"
      },

      size: {
        value: { min: 0.5, max: 2 },
        random: true,
      },

      opacity: {
        value: { min: 0.2, max: 1 },
        random: true,

        anim: {
          enable: true,
          speed: 0.3,
          opacity_min: 0.1,
          sync: false
        },
      },

      move: {
        enable: true,
        speed: 0.05,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" }
      },
    },

    detectRetina: true
  }), []);


  if (!init) return null;



  return (
    <div
      className={`
        transition-opacity duration-1000 
        ${fadeIn ? "opacity-100" : "opacity-0"}
      `}
    >
      <Particles id="tsparticles" options={ option} />
    </div>
  );
};
