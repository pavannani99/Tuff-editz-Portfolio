import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Home = () => {
  // Using a professional video demo reel
  const videoUrl = "https://player.vimeo.com/external/490498802.sd.mp4?s=1d541fd34f2de6c25d02b7f2c7c061b2e9555528&profile_id=164&oauth2_token_id=57447761";
  
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Start the video at 10 seconds
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Start the video at the 10 second mark
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.currentTime = 10; // Start at 10 seconds
        videoElement.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      });
    }
  }, []);
  
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
        
        {/* Video directly playing in the hero section, starting at 10s mark */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-black">
          <div className="aspect-video w-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              controls={false}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
