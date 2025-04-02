import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white text-black shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Adporate
      </Link>

      {/* Navigation Links */}
      <div className="relative flex space-x-6">
        <div className="relative">
          <button
            onClick={() => toggleDropdown("services")}
            className="hover:underline"
          >
            Services
          </button>
          {dropdown === "services" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-2 w-40 bg-black text-white p-2 rounded shadow-lg"
            >
              <Link
                href="/services/web-development"
                className="block p-2 hover:bg-gray-800"
              >
                Web Development
              </Link>
              <Link
                href="/services/app-development"
                className="block p-2 hover:bg-gray-800"
              >
                App Development
              </Link>
              <Link
                href="/services/social-media"
                className="block p-2 hover:bg-gray-800"
              >
                Social Media Management
              </Link>
            </motion.div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("projects")}
            className="hover:underline"
          >
            Projects
          </button>
          {dropdown === "projects" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-2 w-40 bg-black text-white p-2 rounded shadow-lg"
            >
              <Link
                href="/projects/web"
                className="block p-2 hover:bg-gray-800"
              >
                Web Projects
              </Link>
              <Link
                href="/projects/app"
                className="block p-2 hover:bg-gray-800"
              >
                App Projects
              </Link>
              <Link
                href="/projects/marketing"
                className="block p-2 hover:bg-gray-800"
              >
                Marketing
              </Link>
            </motion.div>
          )}
        </div>

        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
