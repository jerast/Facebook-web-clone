import { useEffect } from 'react'
import { useAuthStore } from '@app/store/auth.store'
import { MainLayout } from '@app/layouts/Main.layout'
import { StoryView } from '@stories/components/StoryView'
import { NewPostCard } from '@posts/components/NewPostCard'
import { PostOriginal } from '@posts/components/PostOriginal'
import { PostShared } from '@posts/components/PostShared'
import { title } from '@shared/utils/title'

export const HomePage = () => {
  const { user } = useAuthStore()
  const post = {
    author: {
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      profile: user.profile
    },
    content: {
      text: 'A esta vendedora le hizo falta neoliberalismo 🤣🤣🤣',
      image: {
        url: '/img/post.jpg',
        color: '#4D496A'
      }
    },
    reactions: {
      like: [
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602'
      ],
      love: [
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602'
      ],
      care: [
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602'
      ],
      wow: [
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602',
        'jose.romero.9602'
      ],
      sad: [
        'jose.romero.9602',
      ],
      haha: [
        'jose.romero.9602',
        'jose.romero.9602'
      ],
      angry: [
        'jose.romero.9602'
      ]
    },
    comments: [
      { user: 'jose.romero.9602', comment: 'Good post!'  },
      { user: 'jose.romero.9602', comment: 'Comment 1' },
      { user: 'jose.romero.9602', comment: 'Comment 2' },
      { user: 'jose.romero.9602', comment: 'Last comment' },
    ]
  }

  useEffect(() => {
    title('Facebook clone')
  }, [])

  return (
    <MainLayout>
      <StoryView />
      <NewPostCard />

      <section className="post-list">
        <PostOriginal post={post} />
      </section>
      
    </MainLayout>
  )
}
