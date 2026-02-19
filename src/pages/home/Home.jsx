import Ads from "./components/Ads"
import Services from "./components/Services"
import Applications from "./components/Applications"
import Offers from "./components/Offers"
import Entertainment from "./components/Entertainment"
import FiveGOffers from "./components/FiveGOffers"
import Supports from "./components/Supports"

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
  )
}

export default Home