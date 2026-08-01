const services = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Professional cinematic editing for YouTube, commercials, documentaries and social media.",
  },
  {
    number: "02",
    title: "Color Grading",
    description:
      "Create mood and emotion through professional cinematic color correction and grading.",
  },
  {
    number: "03",
    title: "Motion Graphics",
    description:
      "Modern titles, transitions and animated graphics that make content stand out.",
  },
  {
    number: "04",
    title: "VFX",
    description:
      "Creative visual effects, compositing and advanced editing for cinematic productions.",
  },
  {
    number: "05",
    title: "Photo Editing",
    description:
      "Professional retouching, manipulation and enhancement for brands and creators.",
  },
  {
    number: "06",
    title: "Thumbnail Design",
    description:
      "High-converting thumbnails designed to maximize clicks and audience engagement.",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="flex justify-between items-end mb-20">

        <div>

          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            What I Do
          </p>

          <h2 className="mt-4 text-6xl font-light leading-tight">
            Creative Services
          </h2>

        </div>

        <p className="max-w-md text-gray-500 leading-8">
          Every project is crafted with attention to detail,
          storytelling and modern editing techniques that help
          creators and brands leave a lasting impression.
        </p>

      </div>

      <div className="border-t border-gray-200">

        {services.map((service) => (

          <div
            key={service.number}
            className="
            group
            flex
            justify-between
            items-center
            border-b
            border-gray-200
            py-10
            transition-all
            duration-500
            hover:px-6
            hover:bg-black
            hover:text-white
            "
          >

            <div className="flex gap-10 items-start">

              <span className="text-gray-400 text-lg w-10 group-hover:text-gray-500">
                {service.number}
              </span>

              <div>

                <h3 className="text-3xl font-light">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-gray-500 group-hover:text-gray-300">
                  {service.description}
                </p>

              </div>

            </div>

            <div className="text-4xl transition-transform duration-500 group-hover:translate-x-3">

              →

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}