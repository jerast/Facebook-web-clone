import { NavbarButtons } from './NavbarButtons'
import { NavbarItems } from './NavbarItems'
import { NavbarStart } from './NavbarStart'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarStart />
      <NavbarItems />
      <NavbarButtons />
    </nav>
  )
}
