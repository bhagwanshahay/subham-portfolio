import useReveal from "../../hooks/useReveal";

export default function Clients() {
  const sectionRef = useReveal();

  const clients = [
    "Adobe",
    "Canon",
    "Sony",
    "Nike",
    "Netflix",
    "Puma",
    "Samsung",
    "BMW",
  ];

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28"
    >
      {/* Heading */}
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
        Trusted By
      </p>

      <h2 className="mb-16 text-4xl sm:text-5xl lg:text-6xl font-light">
        Brands & Clients
      </h2>

      {/* Client Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="
              group
              flex
              h-32
              sm:h-36
              items-center
              justify-center
              rounded-3xl
              border
              border-gray-200
              bg-white
              text-2xl
              sm:text-3xl
              font-light
              text-gray-400
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:scale-[1.03]
              hover:border-black
              hover:text-black
              hover:shadow-2xl
            "
          >
            <span
              className="
                transition-all
                duration-500
                group-hover:tracking-wider
              "
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}