import { useEffect } from 'react'
import { title } from '@shared/utils/title'
import { MainLayout } from '@app/layouts/Main.layout'
import { StoryView } from '@stories/components/StoryView'
import { NewPostCard } from '@posts/components/NewPostCard'
import { PostList } from '@posts/containers/PostList'

export const HomePage = () => {

  useEffect(() => {
    title('Facebook clone')
  }, [])

  return (
    <MainLayout>
      <StoryView />
      <NewPostCard />
      <PostList />
    </MainLayout>
  )
}
