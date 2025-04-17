import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div> <Header/>
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden">
      {/* 🔹 Particles Background */}
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
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#63469c",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: false,
            },
            size: {
              value: 3,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#63469c",
              opacity: 0.8,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
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
                  opacity: 1,
                },
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

      {/* 🔹 Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          className="text-5xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our <span className="text-[#63469c]">Team</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Be a part of our innovative and dynamic team. Submit your application
          and explore exciting career opportunities at Adporate.
        </motion.p>

        {/* 🔹 Application Form */}
        <motion.div
          className="mt-8 w-full max-w-lg bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <form action="/submit-application" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63469c]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63469c]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-300"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                required
                className="w-full mt-1 px-4 py-2 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63469c]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 bg-[#63469c] text-white font-bold rounded-lg hover:bg-[#523a82] transition"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Careers;