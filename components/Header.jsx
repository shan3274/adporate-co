"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/employees" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full px-6 py-4 border-b border-gray-200 z-[60] transition-all duration-300"
      style={{
        background: isOpen ? "#1A1A1A" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: isOpen ? "none" : "blur(10px)",
        WebkitBackdropFilter: isOpen ? "none" : "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link href="/" className="text-xl font-bold text-[#1A1A1A]">
          Adporate.co
        </Link>

        {/* 🔹 Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#333333] font-medium hover:text-[#0057FF] transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🔹 CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm text-white bg-[#0057FF] rounded-full hover:bg-[#0040CC] transition-all"
          >
            Let’s Talk
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-black">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Navbar */}
      {/* 🔹 Mobile Navbar */}
      {/* 🔹 Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex flex-col items-center justify-center px-6"
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* 📌 Navigation Links */}
            <nav className="space-y-6 text-lg font-medium text-center">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#0057FF] transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 📍 CTA Button */}
            <Link
              href="/contact"
              className="mt-10 px-6 py-3 text-white bg-[#0057FF] rounded-full hover:bg-[#0040CC] transition-all"
            >
              Let’s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
