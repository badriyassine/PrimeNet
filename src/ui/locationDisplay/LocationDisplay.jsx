import { useLocation, Link } from "react-router-dom";
import { HomeIcon, } from "@heroicons/react/24/solid";

export default function LocationDisplay() {
  const location = useLocation();

  // Don't show on home page
  if (location.pathname === "/") return null;

  // Convert route path to readable text
  const pathNames = location.pathname.split("/").filter((x) => x); // remove empty strings

  const symbol = ">";

  return (
    <nav className="bg-[#27b4e0] py-3 px-6 mb-5 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center text-white text-sm space-x-2">
        {/* Home link */}
        <Link to="/" className="hover:text-[#073651] font-medium flex items-center gap-1">
          <HomeIcon className="w-4 h-4 inline mr-1" />
          Home
        </Link>

        {pathNames.map((name, index) => {
          const routeTo = "/" + pathNames.slice(0, index + 1).join("/");
          const isLast = index === pathNames.length - 1;

          return (
            <span key={index} className="flex items-center">
              {/* separator */}
              <span className="mx-2">{symbol}</span>

              {isLast ? (
                <span className="text-white font-semibold capitalize">
                  {name.replace(/-/g, " ")}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-[#073651] capitalize">
                  {name.replace(/-/g, " ")}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
