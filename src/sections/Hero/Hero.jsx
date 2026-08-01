export default function Hero() {
  const services = [
    {
      number: "01",
      title: "Branding",
      description:
        "Creating memorable brand identities that connect with audiences.",
      tags: ["Brand Strategy", "Visual Identity"],
    },
    {
      number: "02",
      title: "Photography",
      description:
        "Professional photography for products and marketing campaigns.",
      tags: ["Product", "Lifestyle"],
    },
    {
      number: "03",
      title: "Videography",
      description:
        "Creative video production for brands and businesses.",
      tags: ["Commercial", "Reels"],
    },
    {
      number: "04",
      title: "Social Media",
      description:
        "Content creation and management for modern brands.",
      tags: ["Instagram", "Marketing"],
    },
  ];

  return (
    <section className="px-6 pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gray-200">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="Hero"
          className="h-[820px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Top Right Text */}
        <div className="absolute right-16 top-16 max-w-sm text-white">
          <p className="text-lg leading-relaxed">
            Generate Guy creates bold brands, engaging visuals, and memorable
            digital experiences.
          </p>
        </div>

        {/* Main Heading */}
        <div className="absolute bottom-60 left-16">
          <h1 className="text-[170px] font-light leading-none text-white">
            Generate Guy
          </h1>

          <h2 className="ml-28 -mt-6 text-7xl italic text-white/90">
            creative
          </h2>
        </div>

        {/* Bottom Service Cards */}
        <div className="absolute bottom-0 left-0 flex w-full gap-5 p-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex-1 rounded-3xl bg-white p-6 shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400">
                  {service.number}
                </span>

                <span className="text-xl">→</span>
              </div>

              <h3 className="text-lg font-semibold">{service.title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}