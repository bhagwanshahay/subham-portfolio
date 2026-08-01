import { useState } from "react";
import logo from "../../assets/logos/logo-black.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Work",
    "About",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="w-full py-3 border-b border-gray-100 bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src={logo}
            alt="Generate Guy Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          {navLinks.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-500 transition duration-300"
            >
              {item}
            </li>
          ))}

        </ul>

        {/* Desktop Button */}
        <button
          className="
            hidden
            md:block
            bg-black
            text-white
            px-7
            py-3
            rounded-full
            font-medium
            hover:bg-neutral-800
            transition-all
            duration-300
          "
        >
          Start Project
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="px-6 py-6 flex flex-col gap-6 bg-white border-t border-gray-100">

          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-medium hover:text-gray-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <button
            className="
              bg-black
              text-white
              py-3
              rounded-full
              mt-2
            "
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;