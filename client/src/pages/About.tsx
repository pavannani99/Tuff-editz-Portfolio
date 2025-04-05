import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-[400px]">
              <img
                src={profileImage}
                alt="Kotani Naga Sai Ramu - TUFF EDITZ Founder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold font-poppins">About us</h2>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-lg leading-relaxed mb-8">
                Kotani Naga Sai Ramu is a visionary storyteller with a passion for crafting compelling narratives. With
                expertise in video editing, scripting, and digital branding, Kotani brings creativity and precision to
                every project, transforming ideas into impactful visual stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="border border-dashed border-gray-300 rounded-lg px-6 py-4 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-6 w-6"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span className="font-medium">Video Editing</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-6 py-4 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-6 w-6"
                  >
                    <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                  <span className="font-medium">Scripting</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-6 py-4 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-6 w-6"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  <span className="font-medium">Digital Branding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
