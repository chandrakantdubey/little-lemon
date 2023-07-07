import { Link } from 'react-router-dom'
import logo from '../little-lemon-assets/icons_assets/Logo.svg'
import home from '../little-lemon-assets/icons_assets/home icon.svg'


export default function Header() {
  return (
    <header className="page-width container-fluid navbar navbar-expand-md d-flex align-items-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="restaurant logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="navbar-nav ms-auto">
            <a href='/#home' className="nav-item m-auto nav-link">
              <img src={home} alt='home icon' /> Home
            </a>
            <a href="/#about" className="nav-item m-auto nav-link">About</a>
            <a href='/#specials' className='nav-item m-auto nav-link'>Specials</a>
            <Link to='reservations' className='nav-item m-auto nav-link'>Reservations</Link>
            <Link to='login' className='nav-item m-auto nav-link'>Login</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
