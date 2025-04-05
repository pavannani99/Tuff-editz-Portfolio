const Skills = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          Our Proficiency in Video Editing and Scriptwriting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skill Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary text-2xl mb-4 h-8 w-8"
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
            <p className="text-gray-600 mb-4">
              A technique of cutting and rearranging footage. Incorporating visual effects for enhanced storytelling.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary text-2xl mb-4 h-8 w-8"
            >
              <path d="M2 12h2m16 0h2" />
              <path d="M12 2v2m0 16v2" />
              <path d="m4.93 4.93 1.41 1.41m11.32 11.32 1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41M4.93 19.07l1.41-1.41" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M12 14v3" />
              <path d="M10 7h4" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Adobe Premiere Pro, Final Cut Pro</h3>
            <p className="text-gray-600 mb-4">Video Editing Software for professional editing and production.</p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary text-2xl mb-4 h-8 w-8"
            >
              <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Scriptwriting & Storyboarding</h3>
            <p className="text-gray-600 mb-4">
              Techniques: Planning and Shot Composition. Research and Finalization of Script Drafts.
            </p>
          </div>

          {/* Skill Card 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary text-2xl mb-4 h-8 w-8"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Adobe Story, Celtx</h3>
            <p className="text-gray-600 mb-4">Screenplay Software for efficient script development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
