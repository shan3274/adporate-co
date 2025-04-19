import { motion } from "framer-motion";
import { FaPhoneAlt, FaFileInvoiceDollar, FaSearch, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

const workflowSteps = [
  {
    title: "Client Call",
    desc: "Understanding client needs and discussing project requirements.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Quotation & Agreement",
    desc: "Providing pricing and signing agreements for transparency.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Research & Strategy",
    desc: "Understanding business goals & analyzing competitors.",
    icon: <FaSearch />,
  },
  {
    title: "Creative Ideation",
    desc: "Brainstorming & wireframing user-friendly experiences.",
    icon: <FaLightbulb />,
  },
  {
    title: "Development",
    desc: "Turning ideas into reality with clean & scalable code.",
    icon: <FaCode />,
  },
  {
    title: "Launch & Optimization",
    desc: "Deploying & optimizing for best performance.",
    icon: <FaRocket />,
  },
];

const Workflow = () => {
  return (
    <section className="py-16 px-6 bg-white text-black">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Workflow
      </motion.h2>

      {/* Steps Container */}
      <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 relative">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative group w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center p-6 bg-[#F8FAFC] shadow-md rounded-xl hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Step Icon */}
            <div className="text-4xl text-purple-600 p-4 bg-white rounded-full shadow-md">
              {step.icon}
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold mt-4">{step.title}</h3>

            {/* Step Description */}
            <p className="text-gray-600 mt-2">{step.desc}</p>

            {/* Connector Line (Always Visible) */}
            <div
              className={`absolute hidden md:block h-16 w-1 bg-purple-600 top-full left-1/2 transform -translate-x-1/2 ${
                index === workflowSteps.length - 1 ? "opacity-100" : ""
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
