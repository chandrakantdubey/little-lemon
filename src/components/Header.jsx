import Logo from '../little-lemon-assets/icons_assets/Logo.svg'
import Nav from './Nav'

export default function Header() {
  return (
    <header>
        <img src={Logo} alt='little-lemon-logo' />
        <Nav />
      </header>
  )
}
