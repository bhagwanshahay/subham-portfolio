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
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="grid grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[4px] text-gray-500">
            About
          </span>

          <h2 className="mt-4 text-6xl font-light leading-tight">
            Crafting Visual Stories
            <br />
            Through Creative Editing.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-500">
            Generate Guy specializes in cinematic editing,
            commercial videos, reels, VFX, color grading,
            and visual storytelling that helps brands,
            creators, and businesses stand out.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">

            {stats.map((item) => (

              <div key={item.title}>

                <h3 className="text-5xl font-semibold">
                  {item.number}
                </h3>

                <p className="mt-2 text-gray-500">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div>

          <div className="overflow-hidden rounded-[40px]">

            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200"
              alt="About"
              className="h-[700px] w-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}