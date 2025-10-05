import { useParams, Navigate } from "react-router-dom"
import logements from "../../datas/housing.json"
import "./index.scss"
import { FaStar } from "react-icons/fa"

import Collapse from "../../components/Collapse"
import Carousel from "../../components/Carousel"

function Apartment() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to ="*" replace />
  }

  return (
    <div className="apartment">
      {/* Carrousel */}
      <Carousel 
      pictures={logement.pictures}
      title={logement.title}
      location={logement.location}
      />

      {/* Infos principales */}
      <div className="apartment-content">
        <div className="apartment-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Tags */}
          <div className="apartment-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hôte + note */}
        <div className="apartment-host">
          <div className="host">
            <p>{logement.host.name.replace(" ", "\n")}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar
                  key={i}
                  className={i < logement.rating ? "star filled" : "star"}
                >
                  ★
                </FaStar>
              ))}
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className="apartment-collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Apartment
