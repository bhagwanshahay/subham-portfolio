import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../../assets/images/hero-image.jpg";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const topTextRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

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

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power3.out",
        },
      });

      tl.from(imageRef.current, {
        scale: 1.08,
        opacity: 0,
      })
        .from(
          topTextRef.current,
          {
            y: -30,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(
          titleRef.current,
          {
            y: 80,
            opacity: 0,
          },
          "-=0.45"
        )
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          "-=0.45"
        )
        .from(
          cardsRef.current,
          {
            y: 50,
            opacity: 0,
            stagger: 0.15,
          },
          "-=0.35"
        );
    },
    { scope: heroRef }
  );

  return (
    <section className="px-4 sm:px-6 pb-6">
      <div
        ref={heroRef}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gray-200"
      >
        {/* Background Image */}
        <img
          ref={imageRef}
          src={heroImage}
          alt="Video Editor"
          className="
            h-[820px]
            sm:h-[900px]
            md:h-[980px]
            lg:h-[980px]
            xl:h-[1040px]
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top Right Text */}
        <div
          ref={topTextRef}
          className="
            absolute
            top-8
            right-6
            sm:top-12
            sm:right-10
            lg:top-16
            lg:right-16
            max-w-[220px]
            sm:max-w-sm
            text-white
          "
        >
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Generate Guy creates bold brands, engaging visuals,
            and memorable digital experiences.
          </p>
        </div>

        {/* Hero Heading */}
        <div
          className="
            absolute
            left-6
            bottom-[280px]
            sm:left-10
            sm:bottom-[315px]
            md:left-12
            md:bottom-[340px]
            lg:left-16
            lg:bottom-[350px]
          "
        >
          <h1
            ref={titleRef}
            className="
              text-5xl
              sm:text-6xl
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
            ref={subtitleRef}
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
            bottom-4
            sm:bottom-6
            md:bottom-6
            lg:bottom-8
            left-0
            w-full
            px-4
            sm:px-6
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
                        {services.map((service, index) => (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                key={service.number}
                className="
                  rounded-3xl
                  bg-white
                  p-3
                  sm:p-5
                  shadow-xl
                "
              >
                <div className="mb-3 sm:mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    {service.number}
                  </span>

                  <span className="text-xl">→</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
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