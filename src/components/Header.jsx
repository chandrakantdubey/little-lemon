import { Link } from "react-router-dom"
import Logo from '../little-lemon-assets/icons_assets/Logo.svg'
import Nav from "./Nav"

export default function Header() {
  return (
    <div className="layout-width">
      <header className="row header mx-0 navbar navbar-expand-md nav-text">
        <div className="container">
          <Link to="/">
            <img src={Logo} className="navbar-brand" alt='little-lemon-logo' />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <nav className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Nav />
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
