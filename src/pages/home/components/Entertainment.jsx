const services = [
  {
    name: "beIN Sports",
    category: "Sports",
    description: "Watch the biggest live sports events anytime.",
    price: "From $3/week",
    image: "/Entertaiment/beinsport.png",
    gradient: "from-black/80 via-black/40 to-transparent",
  },
  {
    name: "Spotify",
    category: "Music",
    description: "Listen to millions of songs and podcasts.",
    price: "From $5/month",
    image: "/Entertaiment/spotify.png",
    gradient: "from-green-900/80 via-green-700/40 to-transparent",
  },
  {
    name: "Prime Video",
    category: "Movies & TV",
    description:
      "Watch thousands of popular movies, TV shows, and exclusive originals.",
    price: "From $6/month",
    image: "/Entertaiment/prime.jpg",
    gradient: "from-blue-900/80 via-blue-700/40 to-transparent",
  },
  {
    name: "Free Fire",
    category: "Gaming",
    description: "Experience intense survival shooter action.",
    price: "Free to play",
    image: "/Entertaiment/free_fire.webp",
    gradient: "from-orange-900/80 via-orange-700/40 to-transparent",
  },
];

const Entertainment = () => {
  return (
    <section className="  max-w-7xl mx-auto">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-[380px] md:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.name}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`}
            ></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold">{service.name}</h3>

              <p className="text-sm opacity-80">{service.category}</p>

              <p className="text-sm mt-2 mb-3 opacity-90">
                {service.description}
              </p>

              <p className="font-semibold mb-4">{service.price}</p>

              <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
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
