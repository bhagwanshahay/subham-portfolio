import heroImage from "../../assets/images/hero-image.jpg";

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
    <section className="px-4 sm:px-6 pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gray-200">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Video Editor"
          className="h-[700px] sm:h-[750px] lg:h-[850px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Top Right Text */}
        <div className="absolute top-8 right-6 sm:top-12 sm:right-10 lg:top-16 lg:right-16 max-w-xs sm:max-w-sm text-white">

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Generate Guy creates bold brands, engaging visuals,
            and memorable digital experiences.
          </p>

        </div>

        {/* Hero Heading */}

        <div className="absolute left-6 bottom-80 sm:left-10 sm:bottom-72 lg:left-16 lg:bottom-60">

          <h1
            className="
            text-5xl
            sm:text-7xl
            md:text-8xl
            lg:text-[120px]
            xl:text-[150px]
            font-light
            leading-none
            text-white
            "
          >
            Generate Guy
          </h1>

          <h2
            className="
            mt-2
            ml-4
            sm:ml-10
            lg:ml-28
            text-2xl
            sm:text-4xl
            lg:text-6xl
            italic
            text-white/90
            "
          >
            creative
          </h2>

        </div>

        {/* Service Cards */}

        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          p-4
          sm:p-6
          "
        >

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-4
            lg:gap-5
            "
          >

            {services.map((service) => (

              <div
                key={service.number}
                className="
                rounded-3xl
                bg-white
                p-5
                shadow-xl
                "
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="text-xs font-semibold text-gray-400">
                    {service.number}
                  </span>

                  <span className="text-xl">
                    →
                  </span>

                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {service.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                      rounded-full
                      border
                      border-gray-300
                      px-3
                      py-1
                      text-xs
                      text-gray-700
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}