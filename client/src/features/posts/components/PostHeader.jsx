import { Link } from 'react-router-dom'
import { useAppStore } from '@app/store/app.store'
import { getImage } from '@shared/utils/getImage'
import OptionsIcon from '@app/assets/svg/options.svg?react'

export const PostHeader = ({ userID }) => {
  const { users } = useAppStore()
  const { name, username, profile } = users.find(user => user.id === userID)

  return (
    <div className="post-header">
      <Link to={ username }>
          <img
            className="post-header__profile"
            src={ getImage(profile, 40) }
            alt={ username }
          />
      </Link>
      <div className="post-header__data">
          <Link 
            className="post-header__username" 
            to={ username }
          >
            { name }             
          </Link>
          <p className="post-header__date">
              <span>4 days ago · </span>
              <span>&#xF17E0;</span>
          </p>
      </div>
      <button className="post-header__button">
          <OptionsIcon className="post-header__button-icon" />
      </button>
    </div>
  )
}
