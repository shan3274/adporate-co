import { motion } from "framer-motion";
import {
  FaUsers,
  FaClock,
  FaRocket,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";

const points = [
  {
    text: "100+ Happy Clients Worldwide",
    icon: <FaUsers size={28} />,
  },
  {
    text: "3+ Years of Industry Experience",
    icon: <FaClock size={28} />,
  },
  {
    text: "Cutting-Edge Technologies",
    icon: <FaRocket size={28} />,
  },
  {
    text: "Fast & Secure Development",
    icon: <FaShieldAlt size={28} />,
  },
  {
    text: "100% Customer Satisfaction",
    icon: <FaSmile size={28} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 text-center bg-[#F8FAFC] text-black">
      <motion.h2
        className="text-4xl font-bold mb-4 text-[#1e3a8a]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Us?
      </motion.h2>
      <motion.p
        className="text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We deliver high-quality, scalable, and innovative solutions tailored to
        your needs.
      </motion.p>

      {/* Cards Section */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="w-[280px] h-[120px] flex flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              backgroundColor: index % 2 === 0 ? "#1e3a8a" : "#f97316", // Blue & Orange Colors from Figma
              color: "#fff",
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="text-white">{point.icon}</div>
            {/* Text */}
            <span className="text-lg text-center">{point.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
