import projects from "../../data/projects";
import useReveal from "../../hooks/useReveal";

export default function FeaturedWork() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28"
    >
      {/* Section Heading */}
      <p className="uppercase tracking-[6px] text-xs sm:text-sm text-gray-500">
        Featured Work
      </p>

      <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
        Selected Projects
      </h2>

      <p className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-500">
        A collection of cinematic edits, commercial productions,
        creative visuals and storytelling projects crafted
        for brands and creators.
      </p>

      {/* Projects Grid */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        "
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="
              group
              cursor-pointer
              transition-all
              duration-500
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-[320px]
                  sm:h-[420px]
                  lg:h-[520px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-medium
                    transition-colors
                    duration-300
                    group-hover:text-gray-700
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-700
                  "
                >
                  {project.category}
                </p>
              </div>

              <span
                className="
                  text-3xl
                  transition-all
                  duration-300
                  group-hover:translate-x-3
                  group-hover:-translate-y-1
                "
              >
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}