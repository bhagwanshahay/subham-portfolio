import projects from "../../data/projects";
import useReveal from "../../hooks/useReveal";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function FeaturedWork() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28"
    >
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
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}