import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#F5F7FA] text-[#1A1A1A] px-6 sm:pt-0
    pt-50">
      <div className="max-w-4xl text-center">
        {/* 🔹 Main Heading */}
        <motion.h1
          className="text-6xl font-bold leading-tight text-[#0D0D0D]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Business with{" "}
          <span className="text-[#0057FF]">Adporate</span>
        </motion.h1>

        {/* 🔹 Subheading */}
        <motion.p
          className="mt-4 text-lg text-[#4A4A4A] max-w-xl mx-auto leading-relaxed"
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
            className="px-6 py-3 text-lg font-medium text-white bg-[#0057FF] rounded-full hover:bg-[#0040CC] transition-all shadow-lg"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-medium text-[#0057FF] border border-[#0057FF] rounded-full hover:bg-[#0057FF] hover:text-white transition-all shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* 🔹 Key Features */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {[
          "💼 100+ Happy Clients",
          "🚀 3+ Years of Experience",
          "🌎 Global Digital Solutions",
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white text-[#1A1A1A] px-6 py-3 rounded-lg shadow-md border border-gray-200"
          >
            {feature}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
