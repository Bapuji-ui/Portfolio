import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-10 bg-gray-100 mt-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-lg font-semibold">Bapuji Pradhan</h2>

            {/* Social Media Icons */}
            <div className="flex space-x-6 text-gray-600">
                <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn size={24} />
              </a>
                <a
                href="https://www.instagram.com/raja.06._/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
            
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-sm text-gray-600 text-center mt-4">
              <p>&copy; {new Date().getFullYear()} Bapuji Pradhan. All rights reserved.</p>
              <p>Designed & built with 💻 passion for learning and innovation.</p>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
