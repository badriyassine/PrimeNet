import { MessageCircle, MapPin, HelpCircle, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const supportItems = [
{
  title: "WhatsApp Support",
  icon: MessageCircle,
},
{
  title: "Our Agencies",
  icon: MapPin,
},
{
  title: <Link to="/faq">FAQ & Troubleshooting</Link>,
  icon: HelpCircle,
},
{
  title: "Customer Care Centers",
  icon: Headphones,
},
];

const Support = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-10 mt-10">
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
"
      >
        {supportItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-xl
                border border-[#27b4e0]
                p-6
                flex items-center gap-4
                cursor-pointer
                transition-all duration-300
                hover:border-[#27b4e0]
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              {/* ICON CONTAINER */}
              <div
                className="
                w-14 h-14
                min-w-[56px]
                rounded-xl
                bg-blue-50
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-[#27b4e0]
              "
              >
                <Icon
                  size={26}
                  className="
                    text-[#27b4e0]
                    transition-all duration-300
                    group-hover:text-white
                  "
                />
              </div>

              {/* TITLE */}
              <p
                className="
                font-semibold
                text-gray-700
                group-hover:text-[#27b4e0]
              "
              >
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
