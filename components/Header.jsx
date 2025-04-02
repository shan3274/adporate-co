"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md px-6 py-4 z-50 border-b border-gray-200">
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-[#1A1A1A] text-white z-50 flex flex-col items-center justify-center "
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white"
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
              className="mt-8 px-6 py-3 text-white bg-[#0057FF] rounded-full hover:bg-[#0040CC] transition-all"
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
