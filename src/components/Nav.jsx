import { NavLink, Link } from "react-router-dom"

export default function Nav() {
  const active= {
    "backgroundColor": "#495E57",
    "color": "#FFFFFF",
    "scale": 1.1,
    "borderRadius": "5px",
  }
  return (
    <>
    <Link
      to='#home'
      className="nav-item nav-link"
    >
      Home
    </Link>
    <a
      href="#about"
      className="nav-item nav-link"
    >
      About
    </a>
    <a
      href="#menu"
      className="nav-item nav-link"
    >
      Menu
    </a>
    <NavLink
      to='/reservations'
      className="nav-item nav-link"
      style={({isActive})=> isActive?active:{}}
    >
      Reservations
    </NavLink>
    <NavLink
      to='/order'
      className="nav-item nav-link"
      style={({isActive})=> isActive?active:{}}
    >
      Order Online
    </NavLink>
    <NavLink
      to='/login'
      className="nav-item nav-link"
      style={({isActive})=> isActive?active:{}}
    >
      Login
    </NavLink>
    </>
  )
}
