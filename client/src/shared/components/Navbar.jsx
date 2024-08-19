import { Link } from 'react-router-dom'

import NavHomeIcon from '@app/assets/svg/nav_home.svg?react'
import NavFriendsIcon from '@app/assets/svg/nav_friends.svg?react'
import NavPagesIcon from '@app/assets/svg/nav_pages.svg?react'
import NavVideoIcon from '@app/assets/svg/nav_video.svg?react'
import NavMarketIcon from '@app/assets/svg/nav_market.svg?react'


export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--active">
          <Link className="navbar__item-link" to="/">
            <NavHomeIcon className="navbar__item-icon" />
          </Link>
        </li>
        <li className="navbar__item">
          <NavFriendsIcon className="navbar__item-icon" />
        </li>
        <li className="navbar__item">
          <NavPagesIcon className="navbar__item-icon" />
        </li>
        <li className="navbar__item">
          <NavVideoIcon className="navbar__item-icon" />
        </li>
        <li className="navbar__item">
          <NavMarketIcon className="navbar__item-icon" />
        </li>
      </ul>
    </nav>
  )
}
