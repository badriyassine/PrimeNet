import cardData from "./components/cardData";

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
            className=" relative rounded-xl shadow-2xl overflow-hidden flex flex-col justify-end items-start group w-full h-95 sm:h-100"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay like Entertainment cards */}
            <div
              className={`absolute inset-0 bg-linear-to-t ${card.gradient}`}
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
