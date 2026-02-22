import mobileOffers from "./mobileOffer";

export default function MobileOffers() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Mobile Star Plans
        </h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that suits your lifestyle: calls, internet, social
          media, gaming, and shopping.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {mobileOffers.map((offer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Header */}
            <div className="bg-[#27b4e0] text-white text-center py-6">
              <p className="text-lg md:text-xl font-bold tracking-wide">
                {offer.name}
              </p>
              <h2 className="text-xl mt-1">{offer.price}</h2>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              {offer.icons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 border border-gray-300 rounded-lg p-3"
                >
                  <div className="text-[#27b4e0]">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}

              <button className="w-full mt-4 bg-[#27b4e0] hover:bg-[#073651] cursor-pointer text-white font-semibold py-3 rounded-full transition">
                Top-Up
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
