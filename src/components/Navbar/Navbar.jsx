import logo from "../../assets/logos/logo-black.png";

function Navbar() {
  return (
    <nav className="w-full py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src={logo}
            alt="Generate Guy Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-10 list-none m-0 p-0 text-[15px] font-medium">

          <li className="cursor-pointer hover:text-gray-500 transition duration-300">
            Work
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition duration-300">
            Blog
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition duration-300">
            Contact
          </li>

        </ul>

        {/* Button */}
        <button
          className="
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

      </div>
    </nav>
  );
}

export default Navbar;