// pages/about.jsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white gap-10">
        {/* Left Side: Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="underline decoration-blue-500">Adporate</span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            We are a creative IT agency offering top-notch solutions in website
            development, mobile apps, and social media marketing. With years of
            experience and a passion for technology, we turn ideas into
            impactful digital experiences.
          </p>
        </motion.div>

        {/* Right Side: Image with 16:9 Ratio */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-[640px] aspect-video rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Adporate Team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          At Adporate, our mission is to empower businesses through innovative
          digital products, personalized support, and result-driven strategies
          that help our clients scale efficiently in the digital age.
        </motion.p>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Website Development",
              desc: "Custom websites tailored to your business needs.",
            },
            {
              title: "Mobile App Development",
              desc: "Robust apps for Android and iOS platforms.",
            },
            {
              title: "Social Media Management",
              desc: "Grow your brand and engage with the right audience.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-black text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          Founded by passionate tech experts, Adporate began with a vision to
          simplify digital transformation. Over time, we’ve grown into a
          full-service agency trusted by startups and enterprises alike. Our
          journey has been about learning, building, and delivering value —
          every single time.
        </p>
      </section>

      {/* Team CTA */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-4">
          Meet the Team Behind Adporate
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          The real magic happens because of the brilliant team that fuels
          innovation daily.
        </p>
        <a
          href="/employees"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View Our Team
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default About;
