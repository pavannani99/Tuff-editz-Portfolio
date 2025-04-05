import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { TuffEditzFooterLogo } from "@/lib/icons";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/subscribe", { email });
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const footerLinks = {
    services: [
      { name: "YouTube Content", path: "/portfolio" },
      { name: "Instagram Content", path: "/portfolio" },
      { name: "Motion Graphics", path: "/services" }
    ],
    about: [
      { name: "My Story", path: "/about" },
      { name: "Experience", path: "/about" },
      { name: "Skills", path: "/skills" }
    ],
    portfolio: [
      { name: "Recent Work", path: "/portfolio" },
      { name: "Testimonials", path: "/portfolio" },
      { name: "Categories", path: "/portfolio" }
    ],
    contact: [
      { name: "Email", path: "/contact" },
      { name: "Instagram", path: "/contact" },
      { name: "Phone", path: "/contact" }
    ]
  };

  return (
    <footer className="bg-[#1A1A1F] text-white">
      <div className="container mx-auto py-16 px-4">
        {/* Newsletter Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
            Stay Updated with the Latest Projects
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-400 mb-8">
            Subscribe to get notifications about new video edits, special offers, and industry tips!
          </motion.p>
          <motion.form variants={itemVariants} onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow bg-[#2A2A30] border-0 text-white rounded-md focus:ring-primary placeholder:text-gray-500"
            />
            <Button
              type="submit"
              className="sm:flex-shrink-0 bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 shadow-lg hover:shadow-primary/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </motion.form>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-16"></div>

        {/* Logo and Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="flex items-center mb-4">
                <TuffEditzFooterLogo className="h-12 w-12" />
                <span className="text-xl font-bold ml-2">TUFF EDITZ</span>
              </div>
              <p className="text-gray-400 mb-6 text-center md:text-left max-w-sm">
                Professional video editing services by Kotani Naga Sai Ramu.
                Creating engaging and captivating visual stories for YouTube, Instagram, and more.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/tuff_editz_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2A2A30] p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2A2A30] p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a 
                  href="mailto:kotaninaga2005@gmail.com" 
                  className="bg-[#2A2A30] p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-4 text-lg">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Portfolio</h4>
            <ul className="space-y-3">
              {footerLinks.portfolio.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} TUFF EDITZ. All rights reserved.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Contact
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
