import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 mb-6">
        Feel free to reach out through any of the platforms below. I'm always open to networking, project discussions, and career opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-lg text-gray-800">
        {/* LinkedIn */}
        <div className="flex items-center space-x-3">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <a
            href="https://www.linkedin.com/in/bapuji-pradhan-0568a7263/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com
          </a>
        </div>

        {/* Gmail */}
        <div className="flex items-center space-x-3">
          <SiGmail className="text-red-500 text-2xl" />
          <a href="mailto:bapujipradhan33@gmail.com" className="hover:underline">
            bapujipradhan33@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-600 text-xl" />
          <span>+91-9348780089</span> {/* Replace with your actual number */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
