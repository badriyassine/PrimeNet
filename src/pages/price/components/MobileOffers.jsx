import {
  Phone,
  Zap,
  Globe,
  Youtube,
  Gamepad,
  MessageCircle,
  HelpCircle,
  LifeBuoy,
  Mail,
} from "lucide-react";
import { Smartphone } from "lucide-react"; // optional for mobile/SMS

// Use one icon per category
import { Users } from "lucide-react"; // as generic social media icon

const mobileOffers = [
  {
    name: "*1",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Phone />, label: "Calls & SMS" }],
  },
  {
    name: "*2",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Phone />, label: "Calls & internet" }],
  },
  {
    name: "*3",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Globe />, label: "Internet" }],
  },
  {
    name: "*4",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Mail />, label: "SMS" }],
  },
  {
    name: "*5",
    price: "From 5 dh to 25 dh",
    icons: [{ icon: <MessageCircle/>, label: "Social Media" }],
  },
  {
    name: "*6",
    price: "30 dh/month",
    icons: [{ icon: <MessageCircle />, label: "unlimited social media" }],
  },
  {
    name: "*7",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Gamepad />, label: "Shopping in games" }],
  },
  {
    name: "*8",
    price: "Emergency Recharge",
    icons: [{ icon: <LifeBuoy />, label: "send *8 to 4545 with" }],
  },
];

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
