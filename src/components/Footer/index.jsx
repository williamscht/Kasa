import "./index.scss"
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>© {new Date().getFullYear()} Kasa. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer