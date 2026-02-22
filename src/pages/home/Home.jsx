import Ads from "./components/ads/Ads";
import Services from "./components/services/Services";
import Applications from "./components/applications/Applications";
import Offers from "./components/offers/Offers";
import Entertainment from "./components/entertainment/Entertainment";
import FiveGOffers from "./components/FiveGOffers/FiveGOffers";
import Supports from "./components/support/Supports";

const Home = () => {
  return (
    <div className="space-y-10">
      <Ads />
      <Services />
      <Offers />
      <Applications />
      <FiveGOffers />
      <Entertainment />
      <Supports />
    </div>
  );
};

export default Home;
