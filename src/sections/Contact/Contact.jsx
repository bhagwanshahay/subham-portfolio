import useReveal from "../../hooks/useReveal";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {
  const sectionRef = useReveal();

  return (
    <section
      id="contact"
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
          Looking for cinematic edits, commercial videos, reels, VFX,
          or creative storytelling? Fill out the form below and I'll
          get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}