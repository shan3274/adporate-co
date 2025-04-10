import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description: "Custom, fast, and scalable websites for your business.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
  {
    title: "Mobile App Development",
    description: "High-performance mobile apps for iOS & Android.",
    icon: <FaMobileAlt size={40} className="text-green-500" />,
  },
  {
    title: "Social Media Management",
    description: "Grow your brand with expert social media strategies.",
    icon: <FaBullhorn size={40} className="text-pink-500" />,
  },
  {
    title: "Cloud Services",
    description: "Secure and scalable cloud solutions for businesses.",
    icon: <FaCloud size={40} className="text-yellow-500" />,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your data with advanced security measures.",
    icon: <FaShieldAlt size={40} className="text-red-500" />,
  },
  {
    title: "SEO & Digital Marketing",
    description: "Increase visibility with data-driven marketing strategies.",
    icon: <FaChartLine size={40} className="text-purple-500" />,
  },
];

const ServicesSection = ({ bg }) => {
  return (
    <section
      className={`w-full py-16  text-[#1A1A1A] text-center sm:pt-0 pt-30`}
      style={{ background: bg }}
    >
      <motion.h2
        className="text-4xl font-bold text-[#0D0D0D] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Transforming ideas into powerful digital solutions.
      </motion.p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg border border-gray-200 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            style={{
              background: "linear-gradient(to bottom, #FFFFFF, #F9FAFB)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
