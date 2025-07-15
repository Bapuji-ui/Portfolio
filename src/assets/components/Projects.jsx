import courseLogo from "../images/Nist.berhampur.logo.jpg"; // Placeholder logo
import courseCanLogo from "../images/logo-online-course-platform-technical-courses_697205-98.jpg"; 

function PortFolio() {
  const projectItems = [
    {
      id: 1,
      logo: courseLogo,
      name: "International Course Management System",
      description:
        "A centralized platform where users can access information about international university courses, scholarships, and entry-level exams. Built with .NET, HTML, CSS, JavaScript, and C#.",
      tech: ".NET, HTML, CSS, JS, C#",
      videoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      logo: courseCanLogo,
      name: "CourseCan - Course Selling E-Commerce Website",
      description:
        "An online platform where students can purchase courses. Admin can add, delete, and update courses. Built with the MERN stack (MongoDB, Express, React, Node.js).",
      tech: "MERN Stack",
      videoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <>
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {projectItems.map(({ id, logo, name, description, tech,}) => (
            <div
              key={id}
              className="md:w-[450px] border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[100px] h-[100px] object-contain mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{name}</h2>
              <p className="text-gray-700 mb-2">{description}</p>
              <p className="text-sm text-gray-500 mb-4"><strong>Tech Used:</strong> {tech}</p>
              <div className="space-x-4">
                <a
                  href="https://github.com/Bapuji-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr/>
    </>
  );
}

export default PortFolio;
