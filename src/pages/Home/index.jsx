import "./Home.scss"
import Banner from "../../components/Banner/Banner"
import homeBanner from "../../assets/home_banner.png"
import Card from "../../components/Card"

import logements from "../../datas/logements.json"

function Home() {
  
  return (
    <div className="home">
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />

      <div className="card-wrapper">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id} 
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home