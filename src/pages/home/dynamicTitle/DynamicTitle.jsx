import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "PrimeNet - Home",
      "/mobile": "PrimeNet - Mobile Plans",
      "/wifi": "PrimeNet - WiFi Internet",
      "/plans-pricing": "PrimeNet - Plans & Pricing",
      "/support": "PrimeNet - Support Center",
      "/faq": "PrimeNet - FAQ",
      "/terms": "PrimeNet - Terms & Conditions",
      "/order": "PrimeNet - Order",
      "/payment": "PrimeNet - Payment",
      "/agencies": "PrimeNet - Our Agencies",
    };

    document.title =
      titles[location.pathname] || "PrimeNet";
  }, [location]);

  return null;
}

export default DynamicTitle;