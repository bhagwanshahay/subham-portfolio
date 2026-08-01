import useParallax from "../../hooks/useParallax";

export default function ProjectCard({ project }) {
  const imageRef = useParallax();

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-[28px]">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="
            h-[320px]
            sm:h-[420px]
            lg:h-[520px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-medium">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-500">
            {project.category}
          </p>
        </div>

        <span
          className="
            text-3xl
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        >
          →
        </span>
      </div>
    </div>
  );
}