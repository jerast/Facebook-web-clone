import { useAppStore } from '@app/store/app.store'
import { PostCard } from '@posts/containers/PostCard'

export const PostList = () => {
  const { news } = useAppStore()
  
  return (
    <section className="post-list">
      { news.map( post => <PostCard key={post.id} postData={post} /> )}
    </section>
  )
}
