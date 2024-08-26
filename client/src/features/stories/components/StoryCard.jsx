import { getImage } from '@shared/utils/getImage'

export const StoryCard = ({ user, img, viewed }) => {
  return (
    <figure className={`story-card ${ viewed && 'story-card--viewed' }`}>
      <div className="story-card__user">
        <img className="story-card__user-profile" src={getImage(user.profile, 40)} alt={`${user.username}`} />
        <span className="story-card__user-name">{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <div className="story-card__backdrop"/>
      <img className="story-card__img" src={img} alt={`${user.username} story`} />
    </figure>
  )
}