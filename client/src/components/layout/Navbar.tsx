import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { TuffEditzLogo } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <TuffEditzLogo className={`${scrolled ? "h-9 w-9" : "h-10 w-10"} text-primary transition-all duration-300`} />
            <span className={`${scrolled ? "text-lg" : "text-xl"} font-bold tracking-wide transition-all duration-300`}>
              TUFF EDITZ
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
            >
              <motion.div
                className={`relative px-3 py-2 rounded-md font-medium text-sm lg:text-base ${
                  location === item.path 
                    ? "text-primary" 
                    : "text-gray-700 hover:text-primary"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.name}
                {location === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                    layoutId="navbar-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="/contact" className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              Connect
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="sm" 
              className="rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="hidden sm:inline mr-1">Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white z-40 w-full shadow-lg border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`block text-lg font-medium py-2 ${
                      location === item.path 
                        ? "text-primary" 
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button 
                  className="w-full justify-center rounded-md mt-2"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
