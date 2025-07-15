import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import pic from "../images/Bapujiimg.jpg";
import {Link} from "react-scroll"; // rect scroll use for linking one page to another through name

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },    //this all component are shown in tha above nab bar
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="bg-gray-900 text-white max-w-screen-2xl container mx-auto px-4 md:px-20 h-15 shadow-md fixed left-0 right-0 top-0 z-50">
        <div className="flex justify-between items-center h-20">
          <div className="flex space-x-2">
            <img src={pic} alt="Profile" className="w-12 h-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer py-2"> {/*py for space above or sspace from top*/}
              Bapuji Pradhan
              {/* <p className="text-sm">Entry Level Web Developer</p> */}
            </h1>
          </div>
          {/* Desktop nav */}
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-7">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}>
                   <Link to={text} smooth={true} duration={500}>  {/* Using Link from react-scroll for smooth scrolling  for linking using name through Link and give name to all the oage*/}
                     {text}
                   </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setMenu(!menu)}
              className="md:hidden ml-4"
              aria-label="Toggle menu"
            >
              {menu ? <IoMdClose size={24} /> : <FiAlignJustify size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav Bar */}
      {menu && (
        <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-4 z-40 md:hidden">
          <ul>
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer text-xl mb-4"
                key={id}
                onClick={() => setMenu(false)}
              >
                   <Link to={text} smooth={true} duration={500} onClick={() => setMenu(false)} >  {/* Using Link from react-scroll for smooth scrolling  for linking using name through Link and give name to all the oage*/}
                     {text}
                   </Link>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}