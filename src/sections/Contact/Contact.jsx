export default function Contact() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-black px-16 py-20 text-white">

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
          Get In Touch
        </p>

        <h2 className="max-w-3xl text-6xl font-light leading-tight">
          Let's Create Something Amazing Together.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Looking for cinematic edits, commercial videos, reels, VFX or
          creative storytelling? Let's discuss your project and bring your
          vision to life.
        </p>

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="mailto:hello@generateguy.com"
            className="rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Send Email
          </a>

          <a
            href="#"
            className="rounded-full border border-white px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Instagram
          </a>

        </div>

      </div>
    </section>
  );
}