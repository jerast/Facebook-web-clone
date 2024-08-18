import { useAuthStore } from '@app/store/auth.store'
import { image } from '@shared/utils/img'

import NavMenuIcon from '@app/assets/svg/nav_menu.svg?react'
import NavChatIcon from '@app/assets/svg/nav_chat.svg?react'
import NavNotifyIcon from '@app/assets/svg/nav_notify.svg?react'

export const NavbarButtons = () => {
  const { user } = useAuthStore()

  return (
    <div className="navbar__buttons">
      <button><NavMenuIcon /></button>
      <button><NavChatIcon /></button>
      <button><NavNotifyIcon /></button>
      <button><img src={ image(user.profile, 40) } alt={user.name} /></button>
    </div>
  )
}
