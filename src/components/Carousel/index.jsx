import { useState } from "react"
import "./index.scss"

function Carousel({ pictures, title, location }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - ${location} (photo ${currentIndex + 1})`}
        className="carousel-image"
      />

      {pictures.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button>
          <span className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Carousel
