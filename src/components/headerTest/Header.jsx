import { NavLink } from "react-router-dom"
import "./Header.scss"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header