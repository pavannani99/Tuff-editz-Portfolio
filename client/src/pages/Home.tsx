import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Home = () => {
  // Use one of the Google Drive videos from the portfolio
  const demoReelUrl = "https://drive.google.com/file/d/1_tOLbuHb47lWA9BVhLE6uBEB-iJ9eKi-/view?usp=drive_link";
  
  // Convert Google Drive URL to embed format
  const fileId = demoReelUrl.match(/[-\w]{25,}/);
  const videoUrl = fileId 
    ? `https://drive.google.com/file/d/${fileId[0]}/preview` 
    : "https://www.youtube.com/embed/dQw4w9WgXcQ";
  
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
        
        {/* Video directly embedded in the hero section */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-black">
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Demo Reel"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
