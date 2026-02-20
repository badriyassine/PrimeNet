const cardData = [
  {
    title: "Netflix 4K Streaming",
    description: "Enjoy Netflix in stunning 4K quality with ultra fast speeds.",
    gradient: "from-[#ff3a3a]/80 via-[#ff7575]/20 to-transparent",
    image: "/applications/netflix.jpg",
  },
  {
    title: "Gaming Low Ping",
    description:
      "Play online games with low and stable ping for a smooth experience.",
    gradient: "from-[#1e90ff]/80 via-[#00eaff]/20 to-transparent",
    image: "/applications/gaming.jpg",
  },
  {
    title: "High Quality Video Calls",
    description: "Make crystal-clear video calls without interruptions.",
    gradient: "from-[#8f5aff]/80 via-[#b47bff]/20 to-transparent",
    image: "/applications/call.jpg",
  },
  {
    title: "Fast File Uploads",
    description: "Upload your files quickly and efficiently.",
    gradient: "from-[#00c851]/80 via-[#33d9b2]/20 to-transparent",
    image: "/applications/upload.jpg",
  },
];

const Applications = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      {/* Section Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Upgrade Your Experience
        </h1>
        <p className="text-gray-500 mt-3">
          Enjoy ultra-fast speeds for streaming, gaming, and working without
          interruptions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2 sm:mx-0 md:mx-2 ">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className=" relative rounded-xl shadow-2xl overflow-hidden flex flex-col justify-end items-start group w-full h-[380px] sm:h-[400px]"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay like Entertainment cards */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`}
            ></div>

            {/* Card Content */}
            <div className="relative z-20 p-6 sm:p-8 text-white">
              <h2 className="font-extrabold text-xl sm:text-2xl mb-3 drop-shadow-lg">
                {card.title}
              </h2>
              <p className="text-sm sm:text-base font-medium drop-shadow-md">
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
