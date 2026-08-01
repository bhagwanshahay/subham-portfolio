export default function FeaturedWork() {
  const projects = [
    {
      title: "Commercial Advertisement",
      category: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
    },
    {
      title: "Travel Film",
      category: "Color Grading",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
    },
    {
      title: "Music Video",
      category: "VFX",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200",
    },
    {
      title: "Brand Reel",
      category: "Motion Graphics",
      image:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=1200",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <p className="uppercase tracking-[6px] text-sm text-gray-500">
        Featured Work
      </p>

      <h2 className="mt-4 text-6xl font-light leading-tight">
        Selected Projects
      </h2>

      <p className="mt-6 max-w-xl text-gray-500 leading-8">
        A collection of cinematic edits, commercial productions,
        creative visuals, and storytelling projects crafted
        for brands and creators.
      </p>

      <div className="mt-20 grid grid-cols-2 gap-8">

        {projects.map((project) => (

          <div
            key={project.title}
            className="group cursor-pointer"
          >

            <div className="overflow-hidden rounded-[30px]">

              <img
                src={project.image}
                alt={project.title}
                className="
                h-[520px]
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

            </div>

            <div className="mt-5 flex justify-between items-center">

              <div>

                <h3 className="text-2xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {project.category}
                </p>

              </div>

              <span className="text-3xl">
                →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}