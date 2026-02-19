import Offers from "../../pages/home/components/Offers"
import FiveGOffers from "../../pages/home/components/FiveGOffers"
import MobileOffers from "./components/MobileOffers"
import Supports from "../../pages/home/components/Supports"
import Entertainment from "../home/components/Entertainment"
import SatelliteOffers from "./../sat/SatelliteOffers"

const Price = () => {
  return (
    <div className="">
      <Offers/>
      <FiveGOffers/>
      <MobileOffers/>
      <SatelliteOffers/>
      <Entertainment/>
      <Supports/>
    </div>
  )
}

export default Price
