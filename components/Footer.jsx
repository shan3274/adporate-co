import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Adporate.co</h2>
          <p className="text-gray-600 mt-3">
            Crafting digital experiences that leave an impact. 🚀
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "Services", "Portfolio", "Blog", "Contact"].map((link, index) => (
              <li key={index}>
                <a href={`/${link.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">Services</h3>
          <ul className="mt-3 space-y-2">
            {["Web Development", "App Development", "UI/UX Design", "SEO & Marketing"].map(
              (service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                    {service}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-600 hover:text-gray-900 transition text-xl">
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright & Scroll to Top */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm relative">
        <p>© {new Date().getFullYear()} Adporate.co - All Rights Reserved.</p>
        
        {/* Scroll to Top Button */}
        <a
          href="#"
          className="absolute right-6 -top-12 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowUp className="text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
