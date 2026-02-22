import infoItems from "./components/infoItems";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mt-10 mb-10">
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

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
        {infoItems.map((item, index) => {
          const Icon = item.icon;

          const CardContent = (
            <>
              <div className="w-14 h-14 min-w-14 rounded-xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#27b4e0]">
                <Icon
                  size={26}
                  className="text-[#27b4e0] transition-all duration-300 group-hover:text-white"
                />
              </div>

              <p className="font-semibold text-gray-700 group-hover:text-[#27b4e0]">
                {item.title}
              </p>
            </>
          );

          // If link exists wrap with Link
          if (item.link) {
            return (
              <Link
                to={item.link}
                key={index}
                className="group bg-white rounded-xl border border-[#27b4e0] p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:border-[#27b4e0] hover:shadow-lg hover:-translate-y-1"
              >
                {CardContent}
              </Link>
            );
          }

          // Otherwise normal div
          return (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#27b4e0] p-6 flex items-center gap-4 transition-all duration-300 hover:border-[#27b4e0] hover:shadow-lg hover:-translate-y-1"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
