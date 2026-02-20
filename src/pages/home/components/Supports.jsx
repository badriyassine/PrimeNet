import { MessageCircle, MapPin, HelpCircle, Headphones } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const supportItems = [
  {
    title: "WhatsApp Support",
    icon: MessageCircle,
    link: "https://web.whatsapp.com/",
    external: true,
  },
  {
    title: "Our Agencies",
    icon: MapPin,
    link: "/agencies",
    external: false,
  },
  {
    title: "FAQ & Troubleshooting",
    icon: HelpCircle,
    link: "/faq",
    external: false,
  },
  {
    title: "Customer Care Centers",
    icon: Headphones,
    link: "/Support",
    external: false,
  },
];

const Support = () => {
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    if (item.external) {
      window.open(item.link, "_blank");
    } else {
      navigate(item.link);
    }
  };
  return (
    <section className="w-full max-w-7xl mx-auto mb-10 mt-10 ">
      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          How can we help you ?
        </h1>
        <p className="text-gray-500 mt-3">
          Get the support you need quickly and easily. Contact us, find answers,
          or connect with our team for assistance.
        </p>
      </div>
      {/* CONTAINER */}
      <div
        className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-4
  mx-2 sm:mx-0
"
      >
        {supportItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="md:mx-2 group bg-white rounded-xl border border-[#27b4e0] p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:border-[#27b4e0] hover:shadow-lg hover:-translate-y-1"
              onClick={() => handleCardClick(item)}
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCardClick(item);
              }}
            >
              {/* ICON CONTAINER */}
              <div className="w-14 h-14 min-w-[56px] rounded-xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#27b4e0]">
                <Icon
                  size={26}
                  className="text-[#27b4e0] transition-all duration-300 group-hover:text-white"
                />
              </div>
              {/* TITLE */}
              <p className="font-semibold text-gray-700 group-hover:text-[#27b4e0]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Support;
