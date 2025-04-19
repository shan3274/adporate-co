import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Globe, Smartphone, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "An online store for fashion and lifestyle products with payment gateway integration.",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg",
    slug: "ecommerce-website",
  },
  {
    title: "Food Delivery App",
    desc: "A React Native based app for food delivery service with real-time tracking.",
    tech: ["React Native", "Firebase", "Redux"],
    image: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg",
    slug: "food-delivery-app",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with animations, blogs, and responsive UI.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/6476804/pexels-photo-6476804.jpeg",
    slug: "portfolio-website",
  },
];

const Project = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <div className="bg-[#F5F7FA] text-[#1A1A1A]">
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
                    value: 0.8,
                    random: false,
                  },
                  size: {
                    value: 3,
                    random: true,
                  },
                  links: {
                    enable: true,
                    distance: 150,
                    color: "#9A6FD1",
                    opacity: 0.5,
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

      {/* 🔹 Hero Section */}
      <section className="h-[100vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-[#000000] text-[#1A1A1A] gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Our Projects"
            className="w-full max-w-md rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 "
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            We Build Digital Products <br />
            <span className="text-[#63469c]">That Solve Real Problems</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed text-white">
            From idea to deployment — we’ve delivered 25+ projects including
            websites, mobile apps, and full-stack platforms. We ensure timely
            delivery with pixel-perfect design and solid backend architecture.
          </p>
          <ul className="mt-6 text-white space-y-2 text-sm md:text-base">
            <li>🚀 Delivered 95% projects in under 3 weeks</li>
            <li>👨‍💼 Worked with 15+ startups & enterprise clients</li>
            <li>💻 Specialize in MERN, Next.js, Java, and Native Apps</li>
            <li>🔐 Projects built with security, scalability & speed in mind</li>
          </ul>
        </div>
      </section>

      {/* 🔹 Animated Project Cards Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.desc}</p>

              <Link href={`/projects/${project.slug}`}>
                <button className="mt-4 px-5 py-2 text-sm bg-[#63469c] text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 Quotation Section */}
      <section className="bg-[#F5F7FA] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Estimated Project Pricing</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Get a general idea of project budgets. Pricing depends on features and
          complexity.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white shadow-md rounded-xl px-6 py-8 w-full md:w-1/3">
            <div className="flex justify-center mb-4">
              <Globe size={36} className="text-[#63469c]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p className="text-[#63469c] text-2xl font-bold">₹15,000 - ₹40,000</p>
            <p className="mt-2 text-sm text-gray-600">
              Static, Dynamic, or E-commerce websites
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl px-6 py-8 w-full md:w-1/3">
            <div className="flex justify-center mb-4">
              <Smartphone size={36} className="text-[#63469c]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-[#63469c] text-2xl font-bold">₹30,000 - ₹1,00,000</p>
            <p className="mt-2 text-sm text-gray-600">
              Android / iOS apps — hybrid or native
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-white shadow-md rounded-xl px-6 py-8 w-full md:w-1/3"
          >
            <div className="flex justify-center mb-4">
              <Settings size={36} className="text-[#63469c]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-[#63469c] text-2xl font-bold">Let's Discuss</p>
            <p className="mt-2 text-sm text-gray-600">
              Tailored plans for startups or enterprises
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Project;
