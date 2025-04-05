import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">Crafting Visual Stories</h1>
          <p className="text-xl mb-8 text-gray-600">Delivering Digital Impact</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">Join us now</Button>
            <Button variant="outline" className="hover:border-primary hover:text-primary px-8 py-3">Request demo</Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden relative shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1524518877159-9b0d408fa498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Video production scene with creative professionals"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition duration-200">
              <svg
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
