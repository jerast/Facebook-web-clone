import { StoryView } from '@stories/components/StoryView'
import { NewPostCard } from '@posts/components/NewPostCard'
import { PostsList } from '@posts/components/PostsList'

export const HomePage = () => {
  return (
    <>
      <StoryView />
      <NewPostCard />
      <PostsList />
    </>
  )
}
