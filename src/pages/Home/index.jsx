import "./Home.scss"
import Banner from "../../components/Banner/Banner"
import homeBanner from "../../assets/home_banner.png"

function Home() {
  return (
    <Banner image={homeBanner} text="Chez vous, partout et ailleurs"/>
)
}

export default Home