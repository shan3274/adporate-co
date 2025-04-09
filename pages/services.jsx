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

const Services = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-20 bg-[#F0F4F8]">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Ideas <br />
          Into Powerful <span className="text-blue-600">Digital Solutions</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          At Adporate, we specialize in crafting modern websites, scalable apps,
          and impactful social media strategies that help your business thrive
          in the digital era.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-500 max-w-2xl"
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-16 bg-[#F0F4F8]">
        {/* Website Dev */}
        <motion.div
          className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaGlobe className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Website Development</h3>
          <p className="text-gray-600">
            Fully responsive websites that reflect your brand and provide
            seamless user experiences.
          </p>
        </motion.div>

        {/* App Dev */}
        <motion.div
          className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaMobileAlt className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p className="text-gray-600">
            Scalable Android & iOS apps crafted with modern technologies for
            performance and impact.
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaBullhorn className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
          <p className="text-gray-600">
            Boost your digital presence with creative campaigns, daily
            management & real engagement.
          </p>
        </motion.div>
      </section>

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
