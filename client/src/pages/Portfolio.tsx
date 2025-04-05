import { Button } from "@/components/ui/button";

// Import project-specific SVG icons that represent each category
import sportsIcon from "../assets/images/icons/sports.svg";
import weddingIcon from "../assets/images/icons/wedding.svg";
import musicIcon from "../assets/images/icons/music.svg";
import brandIcon from "../assets/images/icons/brand.svg";
import documentaryIcon from "../assets/images/icons/documentary.svg";
import corporateIcon from "../assets/images/icons/corporate.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

const ProjectCard = ({ title, description, imageUrl, videoUrl }: ProjectCardProps) => {
  const handleViewProject = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          variant="outline" 
          className="w-full hover:border-primary hover:text-primary"
          onClick={handleViewProject}
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Sports Highlights",
      description: "Capturing the energy of live sports moments.",
      imageUrl: sportsIcon,
      videoUrl: "https://drive.google.com/file/d/1_tOLbuHb47lWA9BVhLE6uBEB-iJ9eKi-/view?usp=drive_link"
    },
    {
      title: "Wedding Stories",
      description: "Elegant storytelling for special days.",
      imageUrl: weddingIcon,
      videoUrl: "https://drive.google.com/file/d/1x_QWB-rqO5nyEe8oLD7M3kWH2q48nFFf/view?usp=drive_link"
    },
    {
      title: "Music Videos",
      description: "Bringing music to life visually.",
      imageUrl: musicIcon,
      videoUrl: "https://drive.google.com/file/d/1VYD4isHrdyh_No2wB2zah3S9e_QgGPbs/view?usp=drive_link"
    },
    {
      title: "Brand Ads",
      description: "Crafting visually striking campaigns.",
      imageUrl: brandIcon,
      videoUrl: "https://drive.google.com/file/d/1VYD4isHrdyh_No2wB2zah3S9e_QgGPbs/view?usp=drive_link"
    },
    {
      title: "Documentaries",
      description: "Exploring real-world stories in depth.",
      imageUrl: documentaryIcon,
      videoUrl: "https://drive.google.com/file/d/1iNArfVw56yAHDaEBd3opVUI0vh2koGKy/view?usp=drive_link"
    },
    {
      title: "Corporate Videos",
      description: "Delivering impactful business narratives.",
      imageUrl: corporateIcon,
      videoUrl: "https://drive.google.com/file/d/1n1nvDF7fKKb0O54gCBMKhbLfmz3xl1UZ/view?usp=drive_link"
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">Featured Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
