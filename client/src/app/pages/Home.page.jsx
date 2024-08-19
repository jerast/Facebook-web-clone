import { StoryView } from '@stories/components/StoryView'
import { NewPostSection } from '@posts/components/NewPostSection'
import { PostsList } from '@posts/components/PostsList'

export const HomePage = () => {
  return (
    <>
      <StoryView />
      <NewPostSection />
      <PostsList />
    </>
  )
}
