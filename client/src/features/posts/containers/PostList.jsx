import { useAppStore } from '@app/store/app.store'
import { PostCard } from '@posts/containers/PostCard'

export const PostList = () => {
	const { posts } = useAppStore()

	return (
		<section className="post-list">
			{ posts.map( post => 
				<PostCard key={post.id} postData={post} /> 
			)}
		</section>
	)
}
