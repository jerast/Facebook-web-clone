import { useAuthStore } from '@app/store/auth.store'
import { StoryCard } from './StoryCard'
import { image } from '@shared/utils/img'
import PlusIcon from '@app/assets/svg/plus1.svg?react'

export const StoryView = () => {
  const { user } = useAuthStore()
  const stories = [1,2,3,4,5,6]

  return (
    <section className="story-view">

      <button className="story-button">
        <img className="story-button__img" src={image(user.profile, null, 202)} alt="create story" />
        <span className="story-button__div">
          <PlusIcon className="story-button__icon" />
          <p className="story-button__text">Create story</p>
        </span>
      </button>

      {stories.map(story => 
        <StoryCard
          key={story} 
          user={user} 
          img="/img/story.jpg" 
          viewed={story > 3}
        />
      )}

    </section>
  )
}
