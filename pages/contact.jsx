import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useRef } from "react";

const Contact = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white relative">
      {/* Background Particles */}
      <Particles
        id="tsparticles-contact"
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
              value: "#A855F7", // Purple color
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#63469c",
              opacity: 0.8,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1,
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
                  opacity: 1
                }
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <Header />

      <section className="flex-grow py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Let's Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div className="bg-[#1A1A1A] text-white p-8 rounded-xl shadow-lg backdrop-blur-md border border-[#A855F7]/20">
            <h2 className="text-2xl font-semibold mb-6 text-[#A855F7]">Contact Information</h2>
            <p className="mb-6 text-gray-300">
              Got a project idea or need help with something digital? We'd love
              to hear from you. Reach out and let's build something great
              together.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <p>
                <strong className="text-[#A855F7]">Email:</strong> hello@adporate.co
              </p>
              <p>
                <strong className="text-[#A855F7]">Phone:</strong> +91-9876543210
              </p>
              <p>
                <strong className="text-[#A855F7]">Location:</strong> 123 Tech Street, Delhi, India
              </p>
              <p>
                <strong className="text-[#A855F7]">Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong className="text-[#A855F7]">Follow us:</strong>
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/adporate.co/" className="hover:text-[#A855F7] transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/adporate-commercials-90a679299/" className="hover:text-[#A855F7] transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-[#A855F7] transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="bg-[#1A1A1A] p-8 rounded-xl shadow-md backdrop-blur-sm border border-[#A855F7]/20"
          >
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 text-gray-300">First Name</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full p-3 rounded-lg bg-[#2A2A2A] border border-[#A855F7]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]" />
                </div>
              <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 text-gray-300">Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full p-3 rounded-lg bg-[#2A2A2A] border border-[#A855F7]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              />
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-[#2A2A2A] border border-[#A855F7]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">Phone Number</label>
              <input
                type="phone"
                name="phone_number"
                required
                className="w-full p-3 rounded-lg bg-[#2A2A2A] border border-[#A855F7]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
              <textarea
                name="message"
                required
                rows="3"
                className="w-full p-3 rounded-lg bg-[#2A2A2A] border border-[#A855F7]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A855F7] text-white py-3 rounded-lg hover:bg-[#8B46C1] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96 mt-16 px-4 relative z-10">
        <iframe
          title="Our Location"
          className="w-full h-full rounded-xl shadow-lg"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.222973922918!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdcaa21fd5c3%3A0x3c8a9e2b3d69b221!2sDelhi!5e0!3m2!1sen!2sin!4v1649434903010!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
