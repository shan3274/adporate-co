import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const projects = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    desc: "A modern shopping experience with seamless checkout.",
    img: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "social-media",
    title: "Social Media App",
    desc: "Engaging platform connecting people worldwide.",
    img: "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "business-website",
    title: "Business Website",
    desc: "Helping brands establish a professional online presence.",
    img: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  
];

const Portfolio = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <section className="py-16 px-6 bg-[#F8FAFC] text-black">
      <motion.h2
        className="text-5xl font-extrabold text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Work
      </motion.h2>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.desc}</p>

              <Link href={`/projects/${project.id}`}>
                <button className="mt-4 px-5 py-2 text-sm bg-purple-600 text-white font-semibold rounded-lg hover:bg-[#63469c] transition">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
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

export default Portfolio;
