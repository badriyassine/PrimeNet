import { Smartphone, Phone, Globe, Zap } from "lucide-react";

const offers = [
  {
    name: "5G Mobile",
    price: "99 dh/month",
    data: "20 GB 5G Internet",
    calls: "2 Hours national calls",
    sms: "Unlimited SMS",
    international: "No international calls",
  },
  {
    name: "5G Mobile",
    price: "149 dh/month",
    data: "40 GB 5G Internet",
    calls: "5 Hours national calls",
    sms: "Unlimited SMS",
    international: "1 Hour international calls",
  },
  {
    name: "5G Mobile",
    price: "199 dh/month",
    data: "80 GB 5G Internet",
    calls: "Unlimited national calls",
    sms: "Unlimited SMS",
    international: "3 Hours international calls",
  },
  {
    name: "5G Mobile",
    price: "299 dh/month",
    data: "Unlimited 5G Internet",
    calls: "Unlimited national calls",
    sms: "Unlimited SMS",
    international: "10 Hours international calls",
  },
];

export default function FiveGOffers() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          5G Mobile Plans
        </h1>

        <p className="text-gray-500 mt-3">
          Enjoy ultra-fast 5G speeds, generous data, and unlimited
          communication.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Header */}
            <div className="bg-[#27b4e0] text-white text-center py-6">
              <p className="text-sm opacity-90">{offer.name}</p>

              <h2 className="text-2xl font-bold mt-1">{offer.price}</h2>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              {/* Data */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Zap size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.data}</span>
              </div>

              {/* Calls */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Phone size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.calls}</span>
              </div>

              {/* SMS */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Smartphone size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.sms}</span>
              </div>

              {/* International */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Globe size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.international}</span>
              </div>

              {/* Fees */}
              <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1 mt-3">
                <li>SIM card: Free</li>
              </ul>

              {/* Button */}
              <button className="w-full mt-4 bg-[#27b4e0] hover:bg-[#073651] cursor-pointer text-white font-semibold py-3 rounded-full transition">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
