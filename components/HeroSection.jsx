import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import CountUp from 'react-countup';

const HeroSection = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#000000] text-[#1A1A1A] px-6 sm:pt-0
    pt-50 overflow-hidden">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
      
      <div className="max-w-4xl text-center relative z-10">
        {/* 🔹 Main Heading */}
        <motion.h1
          className="text-6xl font-bold leading-tight text-[#ffffff]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Business with{" "}
          <span className="text-[#63469c]">Adporate</span>
        </motion.h1>

        {/* 🔹 Subheading */}
        <motion.p
          className="mt-4 text-lg text-[#ffffff] max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We create stunning websites, seamless apps, and impactful digital
          strategies to help brands thrive in the digital world.
        </motion.p>

        {/* 🔹 CTA Buttons */}
        <motion.div
          className="mt-8 flex justify-center flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/services"
            className="px-6 py-3 text-lg font-medium text-white bg-[#63469c] rounded-full hover:bg-[#0D0D0D] transition-all shadow-lg"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-medium text-[#ffffff] border border-[#63469c] rounded-full hover:bg-[#63469c] hover:text-white transition-all shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* 🔹 Key Features */}
      <motion.div
        ref={featuresRef}
        className="mt-12 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="bg-white text-[#1A1A1A] px-8 py-4 rounded-lg shadow-lg border-2 border-[#63469c] transform hover:scale-100 transition-all duration-300">
          <span className="text-2xl text-[#63469c]">
            {isVisible && <CountUp end={50} duration={3.5} />}+
          </span>
          <span className="block mt-2">Happy Clients</span>
        </div>
        <div className="bg-white text-[#1A1A1A] px-8 py-4 rounded-lg shadow-lg border-2 border-[#63469c] transform hover:scale-105 transition-all duration-300">
          <span className="text-2xl text-[#63469c]">{isVisible && <CountUp end={3} duration={3.5} />}+</span>
          <span className="block mt-2">Years of Experience</span>
        </div>
        <div className="bg-white text-[#1A1A1A] px-8 py-4 rounded-lg shadow-lg border-2 border-[#63469c] transform hover:scale-105 transition-all duration-300">
          <span className="text-2xl text-[#63469c]">Global</span>
          <span className="block mt-2">Digital Solutions</span>
        </div>
      </motion.div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: "#8B6BC3",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.6,
                opacity_min: 0.7,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#8B6BC3",
              opacity: 0.8,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1
                }
              },
              push: {
                quantity: 3,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
    </section>
  );
};

export default HeroSection;
