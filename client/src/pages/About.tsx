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
              <h3 className="text-2xl font-semibold mb-4">Hi, I'm Kotani Naga Sai Ramu</h3>
              <p className="text-lg leading-relaxed mb-6">
                I'm the creative mind behind TUFF EDITZ. With over 2 years of experience in video editing, 
                I transform raw footage into visually engaging, story-driven content. 
                Based in Hyderabad, India, I've worked with creators, small businesses, and event organizers 
                to bring their ideas to life through powerful visual storytelling.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Whether it's short-form videos, YouTube content, cinematic wedding edits, or promo reels — 
                I bring passion and precision to every frame.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">What I Specialize In</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span className="font-medium text-sm">YouTube Intros/Outros</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                  <span className="font-medium text-sm">Reels & Shorts</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                  <span className="font-medium text-sm">Wedding Videos</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                  <span className="font-medium text-sm">Cinematic Transitions</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                  <span className="font-medium text-sm">Motion Graphics</span>
                </div>
                <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary text-xl mb-2 h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <span className="font-medium text-sm">Color Grading</span>
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
