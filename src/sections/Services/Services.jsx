import services from "../../data/services";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">

      {/* Heading */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          lg:items-end
          gap-8
          lg:gap-20
          mb-16
          lg:mb-20
        "
      >
        {/* Left */}
        <div className="max-w-xl">

          <p className="uppercase tracking-[6px] text-xs sm:text-sm text-gray-500">
            What I Do
          </p>

          <h2
            className="
              mt-4
              text-5xl
              sm:text-6xl
              lg:text-6xl
              font-light
              leading-tight
            "
          >
            Creative Services
          </h2>

        </div>

        {/* Right */}
        <div className="max-w-md">

          <p className="text-gray-500 leading-8">
            Every project is crafted with attention to detail,
            storytelling and modern editing techniques that help
            creators and brands leave a lasting impression.
          </p>

        </div>
      </div>

      {/* Services */}
      <div className="border-t border-gray-200">

        {services.map((service) => (

          <div
            key={service.id}
            className="
              group
              border-b
              border-gray-200
              py-8
              lg:py-10
              flex
              flex-col
              md:flex-row
              md:justify-between
              md:items-center
              gap-6
              transition-all
              duration-500
              hover:px-6
              hover:bg-black
              hover:text-white
            "
          >
            {/* Left Content */}
            <div className="flex gap-6 sm:gap-8 items-start">

              <span className="w-8 text-base sm:text-lg text-gray-400 group-hover:text-gray-500">
                {service.number}
              </span>

              <div>

                <h3 className="text-2xl sm:text-3xl font-light">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-gray-500 group-hover:text-gray-300 leading-7">
                  {service.description}
                </p>

              </div>

            </div>

            {/* Arrow */}
            <div
  className="
    self-start
    md:self-center
    mt-2
    md:mt-0
    text-3xl
    md:text-4xl
    transition-transform
    duration-500
    group-hover:translate-x-3
  "
>
  →
</div>

          </div>

        ))}

      </div>

    </section>
  );
}