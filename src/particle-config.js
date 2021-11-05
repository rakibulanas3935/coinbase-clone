const partticlesConfig = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: false,
        value_area: 1042.21783956259,
      },
    },
    color: {
      value: "#2116e1",
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 12,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.7308694910712106,
        opacity_min: 0.13805312609122866,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: true,
        speed: 2.4362316369040355,
        size_min: 61.71786813490223,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "none",
      random: true,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 0,
        rotateY: 0,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
};
export default partticlesConfig;
