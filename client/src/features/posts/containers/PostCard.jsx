import { useState } from 'react'

import { PostHeader } from '@posts/components/PostHeader'
import { PostContent } from '@posts/components/PostContent'
import { PostMeta } from '@posts/components/PostMeta'
import { PostActions } from '@posts/components/PostActions'
import { PostComments } from '@posts/components/PostComments'
import { PostForm } from '@posts/components/PostForm'
import { PostSharedContent } from '@posts/components/PostSharedContent'

export const PostCard = ({ postData }) => {
	const {
		id, user, type, ref, content, image,
		reactions: postReactions = [],
		comments: postComments = [],
		shares: postShares = []
	} = postData
	const [comments, setComments] = useState(postComments)
	const [reactions, setReactions] = useState(postReactions)
	const [shares, setShares] = useState(postShares)

	return (
		<div className="post post--original">
			<PostHeader
				userID={user}
			/>
			{
				type === 'post'
					?  <PostContent
							postID={id}
							content={content}
							image={image}
						/>
					:  <PostSharedContent
							postRef={ref}
						/>
			}
			<div className="post-footer">
				<PostMeta
					comments={comments}
					reactions={reactions}
					shares={shares}
				/>
				<PostActions
					postID={id}
					reactions={reactions}
					setReactions={setReactions}
				/>
				<PostComments
					postID={id}
					comments={comments}
				/>
				<PostForm
					postID={id}
					setComments={setComments}
				/>
			</div>
		</div>
	)
}
