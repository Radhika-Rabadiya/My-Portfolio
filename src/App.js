import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import Home from "./containers/home";
import About from "./containers/about";
// import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

// const handleInit = async (main) => {
//   await loadFull(main);
// };

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();
  const renderParticlesJsInHomePage = location.pathname === "/";
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      // console.log("Particles engine loaded successfully.");
    })
      // .then(() => {
      //   console.log("Particles engine initiated successfully.");
      // })
      .then(() => {
        setInit(true);
      });
  }, []);
  // const particlesLoaded = (container) => {
  //   console.log("Particles loaded:", container);
  // };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "var(--selected-theme-main-color)",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="App">
      {/* particles js */}

      {renderParticlesJsInHomePage && init ? (
        <Particles
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={options}
        />
      ) : (
        ""
      )}
      {/* navar js */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          {/* <Route index path="/resume" element={<Resume />} /> */}
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
