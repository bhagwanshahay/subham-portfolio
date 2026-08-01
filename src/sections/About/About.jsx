import useReveal from "../../hooks/useReveal";

const stats = [
  {
    number: "150+",
    title: "Projects Completed",
  },
  {
    number: "5+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-36"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left */}
        <div className="max-w-xl">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[5px] text-gray-500">
            About
          </span>

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-light
              leading-[1.05]
              tracking-[-0.03em]
            "
          >
            Crafting Visual Stories
            <br />
            Through Creative Editing.
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-base
              sm:text-lg
              leading-8
              text-gray-500
            "
          >
            Generate Guy specializes in cinematic editing,
            commercial videos, reels, VFX, color grading,
            and visual storytelling that helps brands,
            creators, and businesses stand out.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6">
            {stats.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <h3 className="text-3xl sm:text-4xl font-semibold">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="overflow-hidden rounded-[36px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200"
              alt="About"
              className="
                w-full
                h-[420px]
                sm:h-[520px]
                lg:h-[700px]
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}