import logo from "../../assets/logos/logo-black.png";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl border-t border-gray-200 pt-10">

        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="Generate Guy Logo"
              className="h-14 w-auto"
            />

            <p className="mt-6 max-w-sm text-gray-500 leading-7">
              Generate Guy creates cinematic edits, VFX, commercial videos,
              reels and visual stories for brands and creators.
            </p>

          </div>

          {/* Middle */}

          <div>

            <h4 className="mb-5 font-semibold">
              Navigation
            </h4>

            <ul className="space-y-3 text-gray-500">

              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h4 className="mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-3 text-gray-500">

              <p>hello@generateguy.com</p>

              <p>+91 98765 43210</p>

              <p>Instagram</p>

            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row">

          <p>
            © 2026 Generate Guy. All rights reserved.
          </p>

          <a
            href="#"
            className="hover:text-black transition-colors"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}