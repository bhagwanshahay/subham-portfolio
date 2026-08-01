export default function Hero() {
  return (
    <section className="px-6 pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gray-200">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="Hero"
          className="h-[750px] w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Top Right Text */}
        <div className="absolute top-16 right-16 max-w-sm text-white">
          <p className="text-lg leading-relaxed">
            Generate Guy creates bold brands, engaging visuals,
            and memorable digital experiences.
          </p>
        </div>

        {/* Main Heading */}
        <div className="absolute bottom-48 left-16">
          <h1 className="text-[120px] font-light leading-none text-white">
            Generate Guy
          </h1>

          <h2 className="ml-24 -mt-4 text-7xl italic text-white/90">
            creative
          </h2>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-0 left-0 flex w-full gap-5 p-8">

          {[1,2,3,4].map((card)=>(
            <div
              key={card}
              className="flex-1 rounded-3xl bg-white p-6 shadow-xl"
            >
              <h3 className="mb-4 font-semibold">
                Service {card}
              </h3>

              <p className="text-sm text-gray-500">
                Placeholder description until
                client content arrives.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}