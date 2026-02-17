const cardData = [
  {
    title: "Netflix 4K Streaming",
    description: "Enjoy Netflix in stunning 4K quality with ultra-fast speeds.",
    gradient: "from-[#ff3a3a]/10 to-[#ff7575]/70",
    image: "/cards/pexels-freestocks-987586.jpg",
  },
  {
    title: "Gaming Low Ping",
    description:
      "Play online games with low and stable ping for a smooth experience.",
    gradient: "from-[#1e90ff]/10 to-[#00eaff]/70",
    image: "/cards/pexels-rdne-7915437.jpg",
  },
  {
    title: "High Quality Video Calls",
    description: "Make crystal-clear video calls without interruptions.",
    gradient: "from-[#8f5aff]/10 to-[#b47bff]/70",
    image: "/cards/pexels-shvetsa-4226122.jpg",
  },
  {
    title: "Fast File Uploads",
    description: "Upload your files quickly and efficiently.",
    gradient: "from-[#00c851]/10 to-[#33d9b2]/70",
    image: "/cards/pexels-brett-sayles-3803517.jpg",
  },
];

const Applications = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div>
        {/* Section Title */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Upgrade Your Experience
          </h1>

          <p className="text-gray-500 mt-3">
            Choose the perfect fiber plan for your home or business. Fast,
            reliable, and affordable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-xl shadow-2xl overflow-hidden flex flex-col justify-end items-start group w-full h-[380px] sm:h-[400px]"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`absolute inset-0 bg-linear-to-bl ${card.gradient} z-10 transition-opacity duration-300 group-hover:opacity-70`}
              style={{ opacity: 0.3 }}
            />
            <div className="relative z-20 p-6 sm:p-8">
              <h2 className="font-extrabold text-xl sm:text-2xl mb-3 text-white drop-shadow-lg">
                {card.title}
              </h2>
              <p className="text-sm sm:text-base font-medium text-white/90 drop-shadow-md">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
