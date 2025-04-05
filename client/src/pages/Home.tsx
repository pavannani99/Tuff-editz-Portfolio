import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Import project-specific SVG icons that represent each category
import sportsIcon from "../assets/images/icons/sports.svg";
import weddingIcon from "../assets/images/icons/wedding.svg";
import musicIcon from "../assets/images/icons/music.svg";
import brandIcon from "../assets/images/icons/brand.svg";
import documentaryIcon from "../assets/images/icons/documentary.svg";
import corporateIcon from "../assets/images/icons/corporate.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";

const Home = () => {
  // For the previous work section
  const previousWorks = [
    {
      title: "Sports Highlights",
      description: "Capturing the energy of live sports moments.",
      videoUrl: "https://drive.google.com/file/d/1_tOLbuHb47lWA9BVhLE6uBEB-iJ9eKi-/view?usp=drive_link",
      icon: sportsIcon
    },
    {
      title: "Instagram Content",
      description: "Engaging short-form social media content.",
      videoUrl: "https://drive.google.com/file/d/1x_QWB-rqO5nyEe8oLD7M3kWH2q48nFFf/view?usp=drive_link",
      icon: instagramIcon
    },
    {
      title: "Music Videos",
      description: "Bringing music to life visually.",
      videoUrl: "https://drive.google.com/file/d/1VYD4isHrdyh_No2wB2zah3S9e_QgGPbs/view?usp=drive_link",
      icon: musicIcon
    }
  ];

  // Convert Google Drive URL to YouTube embed format for consistent playback
  const getEmbedUrl = (url: string) => {
    // Extract the file ID from the Google Drive URL
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId[0]}/preview`;
    }
    return url;
  };

  return (
    <>
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
          
          {/* Main showcase video from Google Drive */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-16">
            <iframe 
              className="w-full aspect-video"
              src="https://drive.google.com/file/d/1n1nvDF7fKKb0O54gCBMKhbLfmz3xl1UZ/preview"
              title="TUFF EDITZ Demo Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousWorks.map((work, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4 flex items-center">
                  <div className="w-10 h-10 mr-3">
                    <img src={work.icon} alt={work.title} className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={`${getEmbedUrl(work.videoUrl)}?&mute=1&volume=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={work.title}
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-primary text-white hover:bg-primary/90">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
