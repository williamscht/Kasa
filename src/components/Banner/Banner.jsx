import "./Banner.scss"

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière Kasa" className="banner-image" />
      {text && <p className="banner-text">{text}</p>}
    </div>
  )
}

export default Banner