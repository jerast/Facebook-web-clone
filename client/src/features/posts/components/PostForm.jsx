import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '@app/store/auth.store'
import { getImage } from '@shared/utils/getImage'
import SendIcon from '@app/assets/svg/send.svg?react'

export const PostForm = ({ postID, setComments }) => {
  const { user } = useAuthStore()
  const [ newComment, setNewComment ] = useState('')

  const handleChangeInput = ({ target }) => {
    setNewComment( target.value )
  }

  const handleSubmitComment = (event) => {
    event.preventDefault()

    const commentTrim = newComment.trim().replace(/\s+/g, ' ')
    if (!commentTrim) return setNewComment('')

    setComments(comments => [
      ...comments, 
      { user: user.id, content: commentTrim }
    ])
    return setNewComment('')
  }

  return (
    <form
      className="post-form"
      onSubmit={handleSubmitComment}
    >
      <Link
        to={user.username}
        className="post-form__link"
      >
        <img
          className="post-form__profile"
          src={getImage(user.profile, 40)}
          alt={user.username}
        />
      </Link>
      <div className="post-form__input-group">
        <input
          name="text"
          id={postID}
          className={`post-form__input ${newComment && 'post-form__input--active'}`}
          placeholder={`Answer as ${user.firstName} ${user.lastName}`}
          value={newComment}
          onChange={handleChangeInput}
          autoComplete="off"
        />
        <button
          className={`post-form__button`}
          type="submit"
          disabled={!newComment}
        >
          <SendIcon className="post-form__button-icon" />
        </button>
      </div>
    </form>
  )
}
