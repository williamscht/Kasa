import { NavLink, Link } from "react-router-dom"
import "./Header.scss"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="logo" />
      </Link>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header