import services from "./components/services";

const Entertainment = () => {
  return (
    <section className="  max-w-7xl mx-auto m-10 ">
      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Entertainment
        </h1>

        <p className="text-gray-500 mt-3">
          Enjoy premium entertainment services included with your PrimeNet
          subscription.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2 md:mx-2 sm:mx-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-95 md:h-100 lg:h-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.name}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-linear-to-t ${service.gradient}`}
            ></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold">{service.name}</h3>

              <p className="text-sm opacity-80">{service.category}</p>

              <p className="text-sm mt-2 mb-3 opacity-90">
                {service.description}
              </p>

              <p className="font-semibold mb-4">{service.price}</p>

              <button className="border cursor-pointer border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                Discover
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Entertainment;
