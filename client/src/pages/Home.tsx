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
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">Contact Us</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="hover:border-primary hover:text-primary px-8 py-3">View Portfolio</Button>
            </Link>
          </div>
        </div>
        
        {/* Video directly embedded from a reliable source with autoplay and explicitly muted */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe 
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/vIBBVzy5UoQ?autoplay=1&mute=1&start=10&controls=0&showinfo=0&rel=0&volume=0"
            title="TUFF EDITZ Demo Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Home;
