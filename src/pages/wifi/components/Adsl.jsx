import { Wifi, Phone, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    name: "Adsl",
    price: "99 dh/month",
    speed: "20 Mbps",
    fixes: "Unlimited national landline calls",
    mobile: "10 Hours to mobile",
    international: "2 Hours international calls",
    installation: "100 dh",
    equipment: "199 dh",
  },
  {
    name: "Adsl",
    price: "149 dh/month",
    speed: "50 Mbps",
    fixes: "Unlimited national landline calls",
    mobile: "15 Hours to mobile",
    international: "5 Hours international calls",
    installation: "100 dh",
    equipment: "199 dh",
  },
  {
    name: "DarBox 5G",
    price: "349 dh/month",
    speed: "100 Mbps",
    mobile: "20 Hours to mobile",
    equipment: "299 dh",
    sim: "Free 5G SIM card included",
  },
  {
    name: "DarBox 5G",
    price: "449 dh/month",
    speed: "200 Mbps",
    mobile: "Unlimited mobile hours",
    equipment: "299 dh",
    sim: "Free 5G SIM card included",
  },
];

export default function Offers() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Adsl & DarBox 5G Plans
        </h1>

        <p className="text-gray-500 mt-3">
          Choose the perfect plan for your home and daily needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto items-stretch">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full"
          >
            {/* Header */}
            <div className="bg-[#27b4e0] text-white text-center py-6">
              <p className="text-sm opacity-90">{offer.name}</p>

              <h2 className="text-2xl font-bold mt-1">{offer.price}</h2>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3 flex flex-col flex-grow">
              {/* Speed */}
              {offer.speed && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                  <Wifi size={20} className="text-[#27b4e0]" />

                  <span className="font-medium">{offer.speed}</span>
                </div>
              )}

              {/* Landline */}
              {offer.fixes && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                  <Phone size={20} className="text-[#27b4e0]" />

                  <span className="font-medium">{offer.fixes}</span>
                </div>
              )}

              {/* Mobile */}
              {offer.mobile && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                  <Smartphone size={20} className="text-[#27b4e0]" />

                  <span className="font-medium">{offer.mobile}</span>
                </div>
              )}

              {/* International */}
              {offer.international && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">
                  <Globe size={20} className="text-[#27b4e0]" />

                  <span className="font-medium">{offer.international}</span>
                </div>
              )}

              {/* Fees */}
              <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                {offer.installation && (
                  <li>Installation fee: {offer.installation}</li>
                )}
                {offer.equipment && <li>Equipment fee: {offer.equipment}</li>}
                {offer.sim && <li>{offer.sim}</li>}
              </ul>
              <div className="flex-grow"></div>
              {/* Button at bottom */}
              <Link to="/order" className="block mt-4">
                <button className="w-full bg-[#27b4e0] hover:bg-[#073651] cursor-pointer text-white font-semibold py-3 rounded-full transition duration-300">
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
