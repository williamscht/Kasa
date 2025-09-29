import { Link } from "react-router-dom"
import "./Card.scss"

function Card({ id, title, image }) {
  return (
    <div className="card">
      <Link to={`/apartment/${id}`} className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      </Link>
    </div>
    
  )
}

export default Card
