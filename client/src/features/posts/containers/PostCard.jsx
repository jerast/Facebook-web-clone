import { useState } from 'react'

import { PostHeader } from '@posts/components/PostHeader'
import { PostBody } from '@posts/components/PostBody'
import { PostMeta } from '@posts/components/PostMeta'
import { PostActions } from '@posts/components/PostActions'
import { PostComments } from '@posts/components/PostComments'
import { PostForm } from '@posts/components/PostForm'

export const PostCard = ({ postData }) => {
  const { 
    id, user, post, 
    reactions: postReactions = [], 
    comments: postComments = [], 
    shares: postShares = [] 
  } = postData
  const [comments, setComments] = useState(postComments)
  const [reactions, setReactions] = useState(postReactions)
  const [shares, setShares] = useState(postShares)

  return (
    <div className="post">
      <PostHeader userID={user} />
      <PostBody postRef={post} />
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
          postRef={post}
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
