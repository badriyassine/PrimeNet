import { Wifi, Phone, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    name: "Fiber Optic",
    price: "299 dh/month",
    speed: "200 Mbps",
    fixes: "Unlimited national landline calls",
    mobile: "10 Hours to mobile",
    international: "2 Hours international calls",
  },
  {
    name: "Fiber Optic",
    price: "399 dh/month",
    speed: "500 Mbps",
    fixes: "Unlimited national landline calls",
    mobile: "15 Hours to mobile",
    international: "5 Hours international calls",
  },
  {
    name: "Fiber Optic",
    price: "599 dh/month",
    speed: "1 Gbps",
    fixes: "Unlimited national landline calls",
    mobile: "20 Hours to mobile",
    international: "10 Hours international calls",
  },
  {
    name: "Fiber Optic",
    price: "999 dh/month",
    speed: "2 Gbps",
    fixes: "Unlimited national landline calls",
    mobile: "Unlimited mobile hours",
    international: "Unlimited international calls",
  },
  // 5G offers
];

export default function Offers() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Section Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Fiber Optic Plans
        </h1>

        <p className="text-gray-500 mt-3">
          Choose the perfect fiber plan for your home or business. Fast,
          reliable, and affordable.
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid gap-4 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      max-w-7xl mx-auto"
      >
        {offers.map((offer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden 
            hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Header */}
            <div className="bg-[#27b4e0] text-white text-center py-6">
              <p className="text-sm opacity-90">{offer.name}</p>

              <h2 className="text-2xl font-bold mt-1">{offer.price}</h2>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              {/* Speed */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Wifi size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.speed}</span>
              </div>

              {/* Landline */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Phone size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.fixes}</span>
              </div>
              {/* Mobile */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Smartphone size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.mobile}</span>
              </div>
              {/* international */}
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                <Globe size={20} className="text-[#27b4e0]" />

                <span className="font-medium">{offer.international}</span>
              </div>

              {/* Fees */}
              <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1 mt-3">
                <li>Installation fee: 200 dh</li>

                <li>Equipment fee: 200 dh</li>
              </ul>

              {/* Button */}
              <Link to="/order" className="block w-full">
                <button className="w-full mt-4 bg-[#27b4e0] hover:bg-[#073651] cursor-pointer text-white font-semibold py-3 rounded-full transition">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
