import Ads from "./components/Ads"
import Services from "./components/Services"
import Applications from "./components/Applications"

const Home = () => {
  return (
    <div className="space-y-10">
      <Ads />
      <Services />
      <Applications />
    </div>
  )
}

export default Home