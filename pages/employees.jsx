import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaLaptopCode, FaChartLine, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    department: "Management",
    reportsTo: null,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    position: "CTO",
    department: "Technology",
    reportsTo: 1,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    position: "CFO",
    department: "Finance",
    reportsTo: 1,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "James Brown",
    position: "Lead Developer",
    department: "Engineering",
    reportsTo: 2,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    position: "Marketing Lead",
    department: "Marketing",
    reportsTo: 3,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const Employees = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* 🌟 Full-Screen Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#000000] text-[#1A1A1A] px-6">
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
        <div className="max-w-5xl text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold leading-tight text-[#ffffff]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#63469c]">Team</span> Drives Success
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-[#ffffff] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Meet the talented individuals who bring innovation, creativity, and
            expertise to every project at Adporate.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ScrollLink
              to="team"
              smooth={true}
              duration={800}
              className="px-6 py-3 text-lg font-medium text-white bg-[#63469c] rounded-full hover:bg-purple-700 transition-all shadow-lg cursor-pointer"
            >
              View Team
            </ScrollLink>

            <Link href="/careers" className="px-6 py-3 text-lg font-medium text-[#63469c] border border-[#63469c] rounded-full hover:bg-purple-700 hover:text-white transition-all shadow-lg">
              Join Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 📌 Employee Cards */}
      <section id="team" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="w-64 p-5 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition"
            >
              <Link href={`/employee/${emp.id}`}>
                <div className="flex flex-col items-center cursor-pointer">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                  />
                  <h3 className="mt-3 text-xl font-semibold">{emp.name}</h3>
                  <p className="text-sm text-gray-600">{emp.position}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🏢 Departments Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <FaLaptopCode className="text-blue-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Technology</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Innovating and building cutting-edge solutions.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <FaChartLine className="text-green-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Finance</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Managing business strategies and funding.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <FaBullhorn className="text-red-500 text-4xl" />
            <h3 className="text-xl font-bold mt-4">Marketing</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Driving brand growth and market outreach.
            </p>
          </div>
        </div>
      </section>

      {/* 📞 Contact CTA */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Want to Join Our Team?</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-300">
          Reach out to us and explore amazing career opportunities.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Employees;
