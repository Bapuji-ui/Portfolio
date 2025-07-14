import pic from "../images/Bapujiimg.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl font-semibold">
              <h1>Hello, I am a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Web Developer",
                  "Lifelong Learner",
                  "Passionate Coder",
                  "Job Seeker",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-md md:text-lg text-gray-700 mt-2">
              I’m <span className="font-bold text-red-700">Bapuji Pradhan</span> — an enthusiastic web developer focused on building full-stack applications using modern technologies. I'm passionate about turning ideas into interactive digital experiences and always eager to learn and grow in the tech industry.
            </p>

            {/* Social & Tech Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 mt-6">
              {/* Social Icons */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <FaSquareFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bapuji-pradhan-0568a7263/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer hover:text-blue-400" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 md:ml-40 md:mt-20 mt-4 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg"
              alt="Bapuji Pradhan"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
