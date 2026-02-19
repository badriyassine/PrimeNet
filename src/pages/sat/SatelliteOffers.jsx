import { Wifi, Smartphone, Globe, SatelliteDish } from "lucide-react";

const offers = [
  {
    name: "Satellite",
    price: "199 dh/month",
    speed: "20 Mbps",
    mobile: "5 Hours to mobile",
    international: "1 Hour international calls",
    installation: "0 dh",
    equipment: "499 dh",
  },
  {
    name: "Satellite",
    price: "299 dh/month",
    speed: "50 Mbps",
    mobile: "10 Hours to mobile",
    international: "3 Hours international calls",
    installation: "0 dh",
    equipment: "499 dh",
  },
  {
    name: "Satellite",
    price: "399 dh/month",
    speed: "100 Mbps",
    mobile: "Unlimited mobile hours",
    installation: "Free",
    equipment: "499 dh",
    bonus: "Free satellite dish included",
  },
  {
    name: "Satellite Pro",
    price: "599 dh/month",
    speed: "200 Mbps",
    mobile: "Unlimited mobile hours",
    international: "Unlimited international calls",
    installation: "Free",
    equipment: "Free",
    bonus: "Free dish + priority support",
  },
];

export default function SatelliteOffers() {
  return (
    <section className="bg-gray-50 py-10 px-4">

      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Satellite Internet Plans
        </h1>

        <p className="text-gray-500 mt-3">
          Reliable internet anywhere, even in remote areas.
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

              <SatelliteDish className="mx-auto mb-2" size={26} />

              <p className="text-sm opacity-90">
                {offer.name}
              </p>

              <h2 className="text-2xl font-bold mt-1">
                {offer.price}
              </h2>

            </div>



            {/* Body */}
            <div className="p-5 space-y-3 flex flex-col flex-grow">


              {/* Speed */}
              {offer.speed && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">

                  <Wifi size={20} className="text-[#27b4e0]" />

                  <span>{offer.speed}</span>

                </div>
              )}


              {/* Mobile */}
              {offer.mobile && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">

                  <Smartphone size={20} className="text-[#27b4e0]" />

                  <span>{offer.mobile}</span>

                </div>
              )}


              {/* International */}
              {offer.international && (
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3">

                  <Globe size={20} className="text-[#27b4e0]" />

                  <span>{offer.international}</span>

                </div>
              )}



              {/* Fees */}
              <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">

                {offer.installation && (
                  <li>
                    Installation: {offer.installation}
                  </li>
                )}

                {offer.equipment && (
                  <li>
                    Equipment: {offer.equipment}
                  </li>
                )}

                {offer.bonus && (
                  <li className="text-green-600 font-medium">
                    {offer.bonus}
                  </li>
                )}

              </ul>



              {/* Button */}
              <button className="w-full mt-auto bg-[#27b4e0] hover:bg-[#073651] text-white font-semibold py-3 rounded-full transition duration-300">

                Subscribe

              </button>


            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
