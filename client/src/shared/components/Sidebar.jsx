import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@app/store/auth.store'
import { SIDEBAR_ITEMS } from '@app/config/uiConstants'
import { getImage } from '@shared/utils/getImage'

import ArrowDownIcon from '@app/assets/svg/adown.svg?react'

export const Sidebar = () => {
	const { user } = useAuthStore()
	const [ appList, setAppList ] = useState(SIDEBAR_ITEMS.slice(0, 9))

	const handleToogleExpand = () => appList.length <= 10
		? setAppList([...SIDEBAR_ITEMS])
		: setAppList(SIDEBAR_ITEMS.slice(0, 9))

	return (
		<aside className="sidebar">
			<section className="sidebar__profile">
				<Link
					className="sidebar__profile-link"
					to={`/${user.username}`}
				>
					<img
						className="sidebar__profile-picture"
						src={ getImage(user.profile, 40) }
						alt={user.name}
					/>
					<span className="sidebar__profile-name">
						{`${user.firstName} ${user.lastName}`}
					</span>
				</Link>
			</section>

			<section className="sidebar__shortcuts">
				<ul className="sidebar__list">
					{
						appList.map((item, index) =>
							<li
								key={index}
								className="sidebar__item"
							>
								<img
									src="/img/facebook_items.png" alt={item.name}
									className="sidebar__item-img"
									style={{ objectPosition: `0px -${index*37}px` }}
								/>
								<span>{item.name}</span>
							</li>
						)
					}
				</ul>
				<button
					className={`sidebar__button`}
					onClick={handleToogleExpand}
					open={appList.length >= 10 }
				>
					<ArrowDownIcon className="sidebar__button-icon" />
					<span>{ appList.length <= 10 ? 'See more' : 'See less' }</span>
				</button>
			</section>

			<hr className="sidebar__hr" />

			<footer className="sidebar__footer">
				<span className="sidebar__footer-copyright">Facebook Web Clone © 2024 · Jerast</span>
			</footer>
		</aside>
	)
}
