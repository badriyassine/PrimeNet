import Header from "./ui/header/Header";
import LocationDisplay from "./ui/locationDisplay/LocationDisplay";
import Home from "./pages/home/Home";
import Footer from "./ui/footer/Footer";
import Mobile from "./pages/mobile/Mobile";
import Wifi from "./pages/wifi/Wifi";
import Price from "./pages/price/Price";
import Support from "./pages/supports/Support";
import Faq from "./pages/faq/Faq";
import Terms from "./pages/Terms/Terms";
import Order from "./pages/order/Order";
import Payment from "./pages/paiment/Payment";
import Agencies from "./pages/agencies/Agencies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <LocationDisplay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/wifi" element={<Wifi />} />
        <Route path="/plans-pricing" element={<Price />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/agencies" element={<Agencies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
