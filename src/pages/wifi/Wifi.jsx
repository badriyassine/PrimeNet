import Offers from "../../pages/home/components/Offers"
import Adsl from "./components/Adsl"
import Supports from "../../pages/home/components/Supports"
import Ads from "./components/Ads"
import SatelliteOffers from "./../sat/SatelliteOffers"

const Wifi = () => {
  return (
    <div>
      <Ads/>
      <Offers/>
      <Adsl/>
      <SatelliteOffers/>
      <Supports/>
    </div>
  )
}

export default Wifi