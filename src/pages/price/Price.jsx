import Offers from "../../pages/home/components/offers/Offers"
import FiveGOffers from "../../pages/home/components/FiveGOffers/FiveGOffers"
import MobileOffers from "./components/MobileOffers"
import Supports from "../../pages/home/components/support/Supports"
import Entertainment from "../home/components/entertainment/Entertainment"
import SatelliteOffers from "./../sat/SatelliteOffers"
import Adsl from "./../wifi/components/Adsl"

const Price = () => {
  return (
    <div className="">
      <Offers/>
      <FiveGOffers/>
      <Adsl/>
      <MobileOffers/>
      <SatelliteOffers/>
      <Entertainment/>
      <Supports/>
    </div>
  )
}

export default Price
