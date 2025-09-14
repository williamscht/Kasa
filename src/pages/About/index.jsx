import "./about.scss"
import Banner from "../../components/Banner/Banner"
import aboutBanner from "../../assets/about_banner.png"

function About() {
  return (
    <div className="about">
    <Banner image={aboutBanner}/>
    </div>
)
}

export default About
