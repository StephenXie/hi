const particlesConfig = {particles: {
    options:{fullscreen:{enable:false,zIndex:0}},
    number: {
        value: 30,
        density: {
          enable: false,
          value_area: 10,
        },
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#1FFF00",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 7,
        random: true,
        anim: {
          enable: false,
          speed: 60,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#FFFFF1",
        opacity: 0,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 320,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 20,
          duration: 2,
          opacity: 0.8,
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
  };
      ;
  
  export default particlesConfig