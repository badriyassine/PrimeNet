import Ads from "./components/Ads"
import Services from "./components/Services"
import Applications from "./components/Applications"
import Offers from "./components/Offers"
import Entertainment from "./components/Entertainment"

const Home = () => {
  return (
    <div className="space-y-10">
      <Ads />
      <Services />
      <Applications />
      <Offers />
      <Entertainment />
    </div>
  )
}

export default Home