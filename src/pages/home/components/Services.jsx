import {
  Wifi,
  Cable,
  SatelliteDish,
  Signal,
  Building2,
  Headset,
} from "lucide-react";

const services = [
  {
    title: "5G Internet",
    icon: Wifi,
  },
  {
    title: "Fiber Internet",
    icon: Cable,
  },
  {
    title: "Satellite Internet",
    icon: SatelliteDish,
  },
  {
    title: "4G LTE Internet",
    icon: Signal,
  },
  {
    title: "Business Internet",
    icon: Building2,
  },
  {
    title: "Technical Support",
    icon: Headset,
  },
];

const Services = () => {
  return (
    <div className=" max-w-7xl mx-auto px- py-10">
      {/* Section Title */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Discover our offers
        </h1>

        <p className="text-gray-500 mt-3">
          Explore our high-speed internet services designed to keep you
          connected anytime, anywhere.
        </p>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="flex items-center space-x-4 relative bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-xl group border-b-4 border-transparent cursor-pointer hover:border-[#27b4e0]"
            >
              {/* Icon */}
              <div className="">
                <Icon size={40} className="text-[#27b4e0]" />
              </div>

              <div>
                {/* Title */}
                <h2 className="text-xl font-semibold ">{service.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
