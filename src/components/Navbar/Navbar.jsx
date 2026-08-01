import { useEffect, useState } from "react";
import logo from "../../assets/logos/logo-black.png";
import MagneticButton from "../MagneticButton/MagneticButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "work",
        "about",
        "services",
        "clients",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

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
        <div
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
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
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                cursor-pointer
                relative
                transition-colors
                duration-300

                ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-black
                after:transition-all
                after:duration-300

                ${
                  activeSection === item.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <MagneticButton
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
        </MagneticButton>

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
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-left
                text-lg
                font-medium
                transition-colors
                duration-300

                ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-gray-500"
                }
              `}
            >
              {item.name}
            </button>
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