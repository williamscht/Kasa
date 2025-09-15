import "./about.scss"
import Banner from "../../components/Banner/Banner"
import aboutBanner from "../../assets/about_banner.png"
import Collapse from "../../components/Collapse/Collapse"

function About() {
  return (
    <div className="about">
      <Banner image={aboutBanner} />
      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations
          sont régulièrement vérifiées par nos équipes.
        </Collapse>

        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>

        <Collapse title="Service">
          La qualité du service est au cœur de notre engagement chez Kasa.
          Nous veillons à ce que chaque interaction soit empreinte de respect
          et de bienveillance.
        </Collapse>

        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Nous organisons également des
          ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </div>
  )
}

export default About