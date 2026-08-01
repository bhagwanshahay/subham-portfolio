import { useEffect, useState } from "react";
import logo from "../../assets/logos/logo-black.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Work", "About", "Blog", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky
        top-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          isScrolled
            ? "py-2 bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200"
            : "py-4 bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src={logo}
            alt="Generate Guy Logo"
            className={`
              object-contain
              transition-all
              duration-500
              ${isScrolled ? "h-10" : "h-12"}
            `}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {navLinks.map((item) => (
            <li
              key={item}
              className="
                cursor-pointer
                relative
                transition-colors
                duration-300
                hover:text-black
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-black
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
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
            rounded-full
            bg-black
            px-7
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-neutral-800
            hover:shadow-xl
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
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
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
        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-gray-100
            bg-white/95
            backdrop-blur-xl
            px-6
            py-6
          "
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="
                text-lg
                font-medium
                transition-colors
                duration-300
                hover:text-gray-500
              "
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <button
            className="
              mt-2
              rounded-full
              bg-black
              py-3
              text-white
              transition-all
              duration-300
              hover:bg-neutral-800
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