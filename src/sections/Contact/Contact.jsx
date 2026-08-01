import useReveal from "../../hooks/useReveal";

export default function Contact() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28"
    >
      <div
        className="
          rounded-[32px]
          lg:rounded-[40px]
          bg-black
          px-6
          py-14
          sm:px-10
          sm:py-16
          lg:px-16
          lg:py-20
          text-white
        "
      >
        {/* Heading */}
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
          Get In Touch
        </p>

        <h2
          className="
            max-w-3xl
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-light
            leading-tight
          "
        >
          Let's Create Something Amazing Together.
        </h2>

        <p
          className="
            mt-8
            max-w-2xl
            text-base
            sm:text-lg
            leading-8
            text-gray-300
          "
        >
          Looking for cinematic edits, commercial videos, reels, VFX or
          creative storytelling? Let's discuss your project and bring your
          vision to life.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 sm:gap-5">
          <a
            href="mailto:hello@generateguy.com"
            className="
              rounded-full
              bg-white
              px-7
              py-3.5
              sm:px-8
              sm:py-4
              font-medium
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-2xl
            "
          >
            Send Email
          </a>

          <a
            href="#"
            className="
              rounded-full
              border
              border-white
              px-7
              py-3.5
              sm:px-8
              sm:py-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-black
              hover:shadow-xl
            "
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}