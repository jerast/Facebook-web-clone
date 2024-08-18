import NavHomeIcon from '@app/assets/svg/nav_home.svg?react'
import NavFriendsIcon from '@app/assets/svg/nav_friends.svg?react'
import NavPagesIcon from '@app/assets/svg/nav_pages.svg?react'
import NavVideoIcon from '@app/assets/svg/nav_video.svg?react'
import NavMarketIcon from '@app/assets/svg/nav_market.svg?react'

export const NavbarItems = () => {
  return (
    <ul className="navbar__items">
      <li className="active"><NavHomeIcon /></li>
      <li><NavFriendsIcon /></li>
      <li><NavPagesIcon /></li>
      <li><NavVideoIcon /></li>
      <li><NavMarketIcon /></li>
    </ul>
  )
}
