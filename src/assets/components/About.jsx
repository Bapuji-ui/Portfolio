/* eslint-disable react/no-unescaped-entities */
import Resume from "../images/bapujipradhan33gmail.com(cv) 1.pdf"; // Path to your resume file

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm <span className="font-semibold text-red-600">Bapuji</span>,
          a fresher web developer with a strong interest in the Full stack.
          With a background in IT and science, I strive to create impactful and
          visually engaging software solutions that solve real-world problems.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            MCA, NIST University, Berhampur, Odisha — Passout Year: 2025 | CGPA: 8.5
          </li>
          <li>
            B.Sc. (Botany Hons), Science College, Hinjilicut, Odisha — Passout Year: 2022 | CGPA: 7.1
          </li>
          <li>
            +2 Science, Gyanavikash Junior College, Berhampur — Year: 2018 | Marks: 62%
          </li>
          <li>
            10th, Takarada Sahid High School, Sheragada, Ganjam, Odisha — Year: 2016 | Marks: 65%
          </li>
        </ul>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <p className="text-gray-700 mt-2">
          Proficient in <strong>C, Java, Python</strong> | Experienced with <strong>HTML, CSS, JavaScript, React.js, MongoDB</strong> | Basic understanding of <strong>Node.js, Express.js</strong> | Strong grasp of programming logic, responsive design, and debugging | Quick learner and team collaborator with excellent communication skills.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <p className="text-gray-700 mt-2">
          Currently seeking my first professional opportunity as a Web Developer. I am actively learning and building real-world projects using React, MongoDB, and other modern tools to strengthen my practical experience.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">Projects</h1>
        <p className="text-gray-700 mt-2">
          Developed several practice projects including responsive websites, a
          personal portfolio as part of my academic and self-learning journey. I am also building a full-stack e-learning platform as my MCA major project.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-gray-700 mt-2">
          My mission is to leverage my technical skills and creativity to deliver innovative software solutions that add value to users and clients. I aim to continuously learn and grow, both professionally and personally. I am looking forward to joining a reputed IT company as a Web Developer, where I can contribute to real-world projects and work in a collaborative, learning-focused environment.
        </p>
        <br />
        <a
          href={Resume}
          download
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
