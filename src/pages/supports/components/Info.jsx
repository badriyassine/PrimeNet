import { Clock, Activity, HelpCircle, Headphones } from "lucide-react";

const infoItems = [
  {
    title: "Complaints handled within 48 hours",
    icon: Clock,
  },
  {
    title: "24/7 Network stability monitoring",
    icon: Activity,
  },
  {
    title: "Customer Care Centers",
    icon: Headphones,
  },
  {
    title: "Frequently Asked Questions",
    icon: HelpCircle,
  },
];

const Info = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-10 mt-10">
      {/* Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Service Information
        </h1>

        <p className="text-gray-500 mt-3">
          We are committed to providing reliable service, fast complaint
          resolution, and continuous support for all our customers.
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
        {infoItems.map((item, index) => {
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
              {/* ICON */}
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

export default Info;
