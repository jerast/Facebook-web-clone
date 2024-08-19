import { useAuthStore } from '@app/store/auth.store'
import { image } from '@shared/utils/img'
import OptionsIcon from '@app/assets/svg/options.svg?react'

export const Contacts = () => {
  const { user } = useAuthStore()
    
  return (
    <aside className="contacts">
      <section className="contacts__group">
        <div className="contacts__header">
          <h3 className="contacts__header-text">Contacts</h3>
          <button className="contacts__header-button">
            <OptionsIcon className="contacts__header-button-icon" />
          </button>
        </div>
        <ul className="contacts-list">
          <li className="contacts-item contacts-item--online">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item contacts-item--online">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item contacts-item--online">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src={image(user.profile, 40)} alt="" />
            <span className="contacts-item__username">User name</span>
          </li>
        </ul>
      </section>

      <hr className="sidebar__hr" />

      <section className="contacts__group">
        <div className="contacts__header">
          <h3 className="contacts__header-text">Group conversations</h3>
        </div>
        <ul className="contacts-list">
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src="/img/profile.jpg" alt="" />
            <span className="contacts-item__username">Group chat</span>
          </li>
          <li className="contacts-item">
            <img className="contacts-item__profile-picture" src="/img/profile.jpg" alt="" />
            <span className="contacts-item__username">Group chat</span>
          </li>
        </ul>
      </section>
    </aside>
  )
}
