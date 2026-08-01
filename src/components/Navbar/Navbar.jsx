function Navbar() {
  return (
    <nav className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          Logo
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">

          <li className="cursor-pointer hover:text-gray-500 transition-colors duration-300">
            Work
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition-colors duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition-colors duration-300">
            Blog
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition-colors duration-300">
            Contact
          </li>

        </ul>

        {/* Button */}
        <button
          className="
          bg-black
          text-white
          px-6
          py-3
          rounded-full
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