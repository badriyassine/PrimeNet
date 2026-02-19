import Offers from "../../pages/home/components/Offers"
import FiveGOffers from "../../pages/home/components/FiveGOffers"
import MobileOffers from "./components/MobileOffers"
import Supports from "../../pages/home/components/Supports"
import Entertainment from "../home/components/Entertainment"
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
