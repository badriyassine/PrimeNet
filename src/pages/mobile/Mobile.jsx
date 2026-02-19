import FiveGOffers from "../home/components/FiveGOffers";
import MobileOffers from "../price/components/MobileOffers";
import Supports from "../../pages/home/components/Supports";
import Ads from "./components/Ads";

const Mobile = () => {
  return (
    <div>
      <Ads />
      <FiveGOffers />
      <MobileOffers />
      <Supports />
    </div>
  );
};

export default Mobile;
