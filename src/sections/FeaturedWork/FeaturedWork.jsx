import projects from "../../data/projects";

export default function FeaturedWork() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <p className="uppercase tracking-[6px] text-sm text-gray-500">
        Featured Work
      </p>

      <h2 className="mt-4 text-6xl font-light leading-tight">
        Selected Projects
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-gray-500">
        A collection of cinematic edits, commercial productions,
        creative visuals, and storytelling projects crafted
        for brands and creators.
      </p>

      <div className="mt-20 grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-[30px]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {project.category}
                </p>
              </div>

              <span className="text-3xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}