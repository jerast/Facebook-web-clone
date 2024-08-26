import { useEffect } from 'react'
import { useAppStore } from '@app/store/app.store'
import { title } from '@shared/utils/title'
import { MainLayout } from '@app/layouts/Main.layout'
import { StoryView } from '@stories/components/StoryView'
import { NewPostCard } from '@posts/components/NewPostCard'
import { PostCard } from '@posts/components/PostCard'

export const HomePage = () => {
  const { news } = useAppStore()

  useEffect(() => {
    title('Facebook clone')
  }, [])

  return (
    <MainLayout>
      <StoryView />
      <NewPostCard />
      <section className="post-list">
        {
          news.map(post => 
            <PostCard 
              key={post.id}
              data={post} 
            />
          )
        }
      </section>
    </MainLayout>
  )
}
