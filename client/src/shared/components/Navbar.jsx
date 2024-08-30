import { Link, useLocation } from 'react-router-dom'

import NavHomeIcon from '@app/assets/svg/nav_home.svg?react'
import NavHomeFillIcon from '@app/assets/svg/nav_home_fill.svg?react'
import NavFriendsIcon from '@app/assets/svg/nav_friends.svg?react'
import NavPagesIcon from '@app/assets/svg/nav_pages.svg?react'
import NavVideoIcon from '@app/assets/svg/nav_video.svg?react'
import NavMarketIcon from '@app/assets/svg/nav_market.svg?react'

export const Navbar = () => {
	const { pathname } = useLocation()

	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className={`navbar__item ${pathname === '/' && 'navbar__item--active'}`}>
					<Link className="navbar__item-link" to="/">
						{pathname === '/'
							? <NavHomeFillIcon className="navbar__item-icon" />
							: <NavHomeIcon className="navbar__item-icon" />
						}
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
