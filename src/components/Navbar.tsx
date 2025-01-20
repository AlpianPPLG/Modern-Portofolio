"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Sun, Moon, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Services",
      href: "#",
      dropdownItems: [
        { title: "Web Development", href: "#" },
        { title: "Mobile App Development", href: "#" },
        { title: "UI/UX Design", href: "#" },
      ],
    },
    { title: "About", href: "#" },
    { title: "Portfolio", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Testimony", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-black dark:text-white font-bold text-xl"
            >
              ALPIAN<span className="text-blue-300">*</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <button
                  onClick={() =>
                    link.dropdownItems && toggleDropdown(link.title)
                  }
                  className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 text-sm font-medium flex items-center"
                >
                  {link.title}
                  {link.dropdownItems && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {link.dropdownItems && (
                  <AnimatePresence>
                    {activeDropdown === link.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <a
              href={`https://wa.me/${encodeURIComponent("+62082354877197")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 py-4"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <button
                    onClick={() =>
                      link.dropdownItems && toggleDropdown(link.title)
                    }
                    className="w-full text-left block px-3 py-2 text-base font-medium text-black dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {link.title}
                    {link.dropdownItems && (
                      <ChevronDown className="float-right mt-1 h-4 w-4" />
                    )}
                  </button>
                  {link.dropdownItems && activeDropdown === link.title && (
                    <div className="pl-4">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
