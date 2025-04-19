import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaBullhorn,
  FaRocket,
  FaHeadset,
  FaLightbulb,
} from "react-icons/fa";
import ServicesSection from "@/components/ServicesSection";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Services = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <div className="bg-[#F0F4F8] text-white min-h-screen">
      <Header />
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
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent z-10"></div>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-20 bg-[#000000]">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Ideas <br />
          Into Powerful <span className="text-[#63469c]">Digital Solutions</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white-600 max-w-3xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          At Adporate, we specialize in crafting modern websites, scalable apps,
          and impactful social media strategies that help your business thrive
          in the digital era.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-white-500 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Whether you're a startup or an enterprise, our team delivers
          end-to-end services with innovation, speed, and precision. Let’s build
          something amazing together.
        </motion.p>
      </section>

      {/* Services Grid */}
      <ServicesSection bg={"#F0F4F8"} />

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-20 py-20 bg-[#F0F4F8] text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-blue-600">Adporate</span>?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Point 1 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border"
            whileHover={{ scale: 1.03 }}
          >
            <FaRocket className="text-3xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              We bring creativity and technology together to deliver standout
              results.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border"
            whileHover={{ scale: 1.03 }}
          >
            <FaHeadset className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Our team is here for you — before, during, and after your project
              goes live.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md border"
            whileHover={{ scale: 1.03 }}
          >
            <FaLightbulb className="text-3xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Client-Centric Approach
            </h3>
            <p className="text-gray-600">
              We understand your goals and build customized solutions to help
              you grow.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
