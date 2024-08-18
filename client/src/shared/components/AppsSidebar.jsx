import { useState } from 'react'
import { image } from '@shared/utils/img'
import { useAuthStore } from '@app/store/auth.store'
import { appsSidebarItems } from '@app/config/uiConstants'

import ArrowDownIcon from '@app/assets/svg/adown.svg?react'
import { Link } from 'react-router-dom'

export const AppsSidebar = () => {
  const { user } = useAuthStore()
  const [ appList, setAppList ] = useState(appsSidebarItems.slice(0, 9))

  const handleToogleExpand = () => appList.length <= 10 
    ? setAppList([...appsSidebarItems])
    : setAppList(appsSidebarItems.slice(0, 9))

  return (
    <section className="apps">
      <ul className="apps__list">
        <li className="apps__item apps__item--user">
          <Link to={`user/${user.username}`}>
            <img src={ image(user.profile, 40) } alt={user.name} />
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </Link>
        </li>
        {
          appList.map((item, index) => (
            <li key={index} className="apps__item apps__item--app">
              <img className={`object-[0px_-${index*37}px]`} src="/img/facebook_items.png" alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))
        }
        <li 
          className={`apps__item apps__item--button ${appList.length > 10 && 'apps__item--button-up' }`} 
          onClick={handleToogleExpand}
        >
          <ArrowDownIcon />
          <span>{ appList.length <= 10 ? 'See more' : 'See less' }</span>
        </li>
      </ul>
      <hr className="apps__hr" />
      <span className="apps__footer">Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2024</span>
    </section>
  )
}
