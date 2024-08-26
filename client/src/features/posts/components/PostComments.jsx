import { Link } from 'react-router-dom'
import { useAppStore } from '@app/store/app.store'
import { getImage } from '@shared/utils/getImage'

export const PostCommentItem = ({ user, comment }) => {
  return (
    <li className="post-comment-list__item">
      <Link to={ user.username} >
        <img
          className="post-comment-list__profile"
          src={ getImage(user.profile, 40) }
          alt={ user.username }
        />
      </Link>
      <p className="post-comment-list__box">
        <Link 
          to={ user.username } 
          className="post-comment-list__user"
        >
          { user.name }
        </Link>
        <span className="post-comment-list__text">
          { comment.content }
        </span>
      </p>
    </li>
  )
}


export const PostComments = ({ postRef, comments }) => {
  const { users } = useAppStore()
  
  if (!comments.length) 
    return <></>
  
  return (
    <ul className="post-comment-list">
      <Link className="post-comment-list__title" to={`post/${postRef}`}>
        View all comments
      </Link>
      {
        comments
          .slice(-5)
          .map((comment, index) => {
            const commentUser = users.find(user => user.id === comment.user)
            return (
              <PostCommentItem 
                key={index}
                user={commentUser}
                comment={comment}
              />
            )
          })
      }
    </ul>
  )
}
