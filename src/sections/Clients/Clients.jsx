export default function Clients() {
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
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
          Trusted By
        </p>

        <h2 className="mb-16 text-6xl font-light">
          Brands & Clients
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {clients.map((client) => (
            <div
              key={client}
              className="
                flex
                h-36
                items-center
                justify-center
                rounded-3xl
                border
                border-gray-200
                bg-white
                text-3xl
                font-light
                text-gray-400
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-black
                hover:text-black
                hover:shadow-lg
              "
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}