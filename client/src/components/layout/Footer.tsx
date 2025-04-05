import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { TuffEditzFooterLogo } from "@/lib/icons";

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

  return (
    <footer className="bg-dark text-white bg-[#1E2124]">
      <div className="container mx-auto py-12 px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Subscribe to our newsletter</h3>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Input your email"
              className="flex-grow bg-dark border border-gray-700 text-white rounded-r-none focus:ring-primary"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Logo and Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <TuffEditzFooterLogo className="mr-2 h-10 w-10" />
              <span className="text-xl font-bold font-poppins">TUFF EDITZ</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full md:w-auto">
            <div className="text-center md:text-left">
              <h4 className="text-gray-400 mb-3 text-sm uppercase">Pricing</h4>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Plans
              </a>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Enterprise
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gray-400 mb-3 text-sm uppercase">About us</h4>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Team
              </a>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Values
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gray-400 mb-3 text-sm uppercase">Features</h4>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Editing
              </a>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Production
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gray-400 mb-3 text-sm uppercase">Help Center</h4>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Guides
              </a>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Support
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-gray-400 mb-3 text-sm uppercase">Contact us</h4>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Email
              </a>
              <a href="#" className="block mb-2 hover:text-primary transition duration-200">
                Phone
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <select className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Brand, Inc. • <a href="#" className="hover:text-white">Privacy</a> •{" "}
            <a href="#" className="hover:text-white">Terms</a> •{" "}
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
