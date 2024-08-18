import { useAuthStore } from '@app/store/auth.store'
import { image } from '@shared/utils/img'

import FbIcon from '@app/assets/svg/icon.svg?react'
import SearchIcon from '@app/assets/svg/search.svg?react'
import NavHomeIcon from '@app/assets/svg/nav_home.svg?react'
import NavFriendsIcon from '@app/assets/svg/nav_friends.svg?react'
import NavPagesIcon from '@app/assets/svg/nav_pages.svg?react'
import NavVideoIcon from '@app/assets/svg/nav_video.svg?react'
import NavMarketIcon from '@app/assets/svg/nav_market.svg?react'

import NavMenuIcon from '@app/assets/svg/nav_menu.svg?react'
import NavChatIcon from '@app/assets/svg/nav_chat.svg?react'
import NavNotifyIcon from '@app/assets/svg/nav_notify.svg?react'

export const Navbar = () => {
  const { user } = useAuthStore()

  return (
    <nav className="navbar">
      <div className="navbar__start">
        <FbIcon className="navbar__start-icon" />
        <label className="navbar__start-search">
          <SearchIcon className="navbar__start-search-icon" />
          <input className="navbar__start-search-input" type="text" placeholder="Search Facebook" />
        </label>
      </div>

      <ul className="navbar__items">
        <li className="active"><NavHomeIcon /></li>
        <li><NavFriendsIcon /></li>
        <li><NavPagesIcon /></li>
        <li><NavVideoIcon /></li>
        <li><NavMarketIcon /></li>
      </ul>
      
      <div className="navbar__actions">
        <button><NavMenuIcon /></button>
        <button><NavChatIcon /></button>
        <button><NavNotifyIcon /></button>
        <button><img src={ image(user.profile, 40) } alt={user.name} /></button>
      </div>
    </nav>
  )
}
