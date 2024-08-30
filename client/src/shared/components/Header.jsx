import { Link } from 'react-router-dom'
import { useAuthStore } from '@app/store/auth.store'
import { Navbar } from '@shared/components/Navbar'
import { getImage } from '@shared/utils/getImage'

import FbIcon from '@app/assets/svg/icon.svg?react'
import SearchIcon from '@app/assets/svg/search.svg?react'
import NavMenuIcon from '@app/assets/svg/nav_menu.svg?react'
import NavChatIcon from '@app/assets/svg/nav_chat.svg?react'
import NavNotifyIcon from '@app/assets/svg/nav_notify.svg?react'

export const Header = () => {
	const { user } = useAuthStore()

	return (
		<header className="header">

			<div className="header-start">
				<Link to="/">
					<FbIcon className="header-start__icon" />
				</Link>
				<label className="header-start__search">
					<SearchIcon className="header-start__search-icon" />
					<input className="header-start__search-input" type="text" placeholder="Search Facebook" />
				</label>
			</div>

			<Navbar />

			<div className="header-actions">
				<button className="header-actions__button">
					<NavMenuIcon className="header-actions__button-icon" />
				</button>
				<button className="header-actions__button">
					<NavChatIcon className="header-actions__button-icon" />
				</button>
				<button className="header-actions__button">
					<NavNotifyIcon className="header-actions__button-icon" />
				</button>
				<button className="header-actions__user">
					<img
						className="header-actions__user-profile"
						src={ getImage(user.profile, 40) }
						alt={user.name}
					/>
				</button>
			</div>

		</header>
	)
}
