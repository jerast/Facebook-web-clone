import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppStore } from '@app/store/app.store'
import { useAuthStore } from '@app/store/auth.store'
import { image } from '@shared/utils/img'
import { EMOJI_LIST, POST_THEMES, SHORT_POST_LENG, SHOW_EMOJIS_TIME } from '@app/config/uiConstants'

import OptionsIcon from '@app/assets/svg/options.svg?react'
import SendIcon from '@app/assets/svg/send.svg?react'

const PostHeader = ({ userId }) => {
  const { users } = useAppStore()
  const postUser = users.find(user => user.id === userId)

  return (
    <div className="post-header">
      <Link to={postUser.username}>
          <img
            className="post-header__profile"
            src={image(postUser.profile, 40)}
            alt={postUser.username}
          />
      </Link>
      <div className="post-header__data">
          <Link className="post-header__username" to={`/${postUser.username}`}>
              {postUser.name}             
          </Link>
          <p className="post-header__date">
              <span>4 days ago · </span>
              <span>&#xF17E0;</span>
          </p>
      </div>
      <button className="post-header__button">
          <OptionsIcon className="post-header__button-icon" />
      </button>
    </div>
  )
}

const PostBody = ({ originalPostId }) => {
  const { posts } = useAppStore()
  const { content, image } = posts.find(post => post.id === originalPostId)
  
  const contetText = () => {
    const isShortContent = content.text.length <= SHORT_POST_LENG
    const postTheme = content.theme && POST_THEMES.find(bg => bg.id === content.theme)

    if (!content.text)
      return <></>

    if (content.theme)
      return (
        <span
          className="post-body__text post-body__text--theme"
          style={{
            background: postTheme.background, 
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            wordBreak: 'break-word',
            color: postTheme.dark ? 'inherit' : 'white'
          }}
        >
          {content.text}
        </span>
      )

    if (isShortContent && !image)
      return (
        <span className="post-body__text post-body__text--big">
          {content.text}
        </span>
      )

    return (
      <span className="post-body__text post-body__text--small">
        {content.text}
      </span>
    )
  }

  return (
    <div className={`post-body`}>
      { contetText() }
      { image &&
          <Link to={`/post/${originalPostId}`}>
            <img className="post-body__image" src={image.url} style={{ background: image.color }} />
          </Link>
      }
    </div>
  )
}

const PostMeta = ({ reactions, commentsCount, sharesCount = 0 }) => {
  const reactionList = Object.keys(reactions)
  const reactionUsers = Object.values(reactions)
  const reactionsCount = Object.values(reactions).filter(list => list.length)
  
  if (!reactionsCount.length && !commentsCount && !sharesCount)
    return <></>

  return (
    <div className="post-meta">
      {!!reactionsCount.length &&
          <div className="post-meta__reactions">
            <div
              className="post-meta__reactions-emojis"
              style={{ width: reactionsCount.length * 18 + 6 }}
            >
              {reactionList.map((reaction, index) =>
                !!reactions[reaction].length &&
                  <img
                    key={reaction}
                    src={image(EMOJI_LIST[reaction].icon, 48, 48)}
                    alt={reaction}
                    className="post-meta__reactions-emoji"
                  />
              )}
            </div>
            <p className="post-meta__reactions-counter">
              {reactionUsers.flat(1).length}
            </p>
          </div>
      }
      {!!commentsCount && (
          <p>{commentsCount} {commentsCount > 1 ? 'comments' : 'comment'}</p>
      )}
      {!!sharesCount && (
          <p>{sharesCount} {sharesCount > 1 ? 'shares' : 'share'}</p>
      )}
    </div>
  )
}

const PostActions = ({ postId, reactions, setReactions }) => {
  const { user } = useAuthStore()
  const [ likeState, setLikeState ] = useState(null)
  const [ likeTimer, setLikeTimer ] = useState(null)
  const [ showEmojis, setShowEmojis ] = useState(false)

  const onLikeShowEmojis = () => {
    const newTimer = setTimeout(() => {
      setShowEmojis(true)
    }, SHOW_EMOJIS_TIME)

    setLikeTimer(newTimer)
  }

  const onLikeHideEmojis = () => {
    if (likeTimer) {
      clearTimeout(likeTimer)
      setLikeTimer(null)
      setShowEmojis(false)
    }
  }

  const onLikeClickEmoji = ({ target }) => {
    const selectedReaction = target.dataset.name
    const previousReaction = Object.keys(reactions).find(key => reactions[key]?.includes(user.id))

    if (likeTimer) {
      clearTimeout(likeTimer)
      setLikeTimer(null)
      setShowEmojis(false)
    }

    if (
      (target.id === 'like-button' && likeState) ||
      (selectedReaction === likeState?.name)
    ) {
      setLikeState( null )
      return setReactions(prevReactions => ({
        ...prevReactions,
        [likeState.name]: prevReactions[likeState.name].filter(id => id !== user.id)
      }))
    }

    setLikeState( EMOJI_LIST[selectedReaction] )
    if (previousReaction) {
      setReactions(prevReactions => ({
        ...prevReactions,
        [previousReaction]: prevReactions[previousReaction].filter(id => id !== user.id)
      }))
    }
    return setReactions(prevReactions => ({
      ...prevReactions,
      [selectedReaction]: [...(prevReactions[selectedReaction] || []), user.id]
    }))
  }

  const onCommentInputFocus = () => {
    document.getElementById(postId).focus()
  }

  return (
    <div className="post-actions">
      <button 
        id="like-button"
        data-name="like"
        className="post-actions__button"
        onMouseEnter={onLikeShowEmojis}
        onMouseLeave={onLikeHideEmojis}
        onClick={onLikeClickEmoji}
      >
        {
          likeState
            ? <img 
                className="post-actions__emoji"
                src={image(likeState.icon, 48, 48)} 
                style={{ animationDuration: '.4s', animationName: 'emoji-jump-'+likeState.name }} 
              /> 
            : <span className="post-actions__symbol">&#xF0378;</span>
        }
        {
          likeState
            ? <span className="post-actions__text" style={{ color: likeState.color }}>{ likeState.name }</span>
            : <span className="post-actions__text">Like</span>
        }
        {
          showEmojis && 
            <div className="post-actions__emoji-list">
              {Object.entries(EMOJI_LIST).map(emoji =>
                  <img
                    key={emoji[0]}
                    src={image(emoji[1].icon, 48, 48)}
                    data-name={emoji[0]}
                    className="post-actions__emoji-item"
                  />
              )}
            </div>
        }
      </button>

      <button 
        className="post-actions__button"
        onClick={onCommentInputFocus}
      >
        <span className="post-actions__symbol">&#xF0379;</span>
        <span className="post-actions__text">Comment</span>
      </button>
      
      <button className="post-actions__button">
        <span className="post-actions__symbol">&#xF037A;</span>
        <span className="post-actions__text">Share</span>
      </button>
    </div>
  )
}

const PostCommentList = ({ originalPostId, comments }) => {
  const { users } = useAppStore()
  
  if (!comments.length) return <></>
  
  return (
    <ul className="post-comment-list">
      <Link className="post-comment-list__title" to={`post/${originalPostId}`}>
        View all comments
      </Link>

      { comments.slice(-5).map((comment, index) => {
          const commentUser = users.find(user => user.id === comment.user)

          return (
            <li className="post-comment-list__item" key={index}>
              <Link to={commentUser.username}>
                <img
                  className="post-comment-list__profile"
                  src={image(commentUser.profile, 40)}
                  alt={commentUser.username}
                />
              </Link>
              <p className="post-comment-list__box">
                <Link to={commentUser.username} className="post-comment-list__user">
                  {commentUser.name}
                </Link>
                <span className="post-comment-list__text">{comment.content}</span>
              </p>
            </li>
          )
        }
          
      )}
    </ul>
  )
}

const PostForm = ({ postId, addComment }) => {
  const { user } = useAuthStore()
  const [ newComment, setNewComment ] = useState('')

  const handleChangeInput = ({ target }) => {
    setNewComment( target.value )
  }

  const handleSubmitComment = (event) => {
    event.preventDefault()

    const commentTrim = newComment.trim().replace(/\s+/g, ' ')
    if (!commentTrim) return setNewComment('')

    addComment(comments => [
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
          src={image(user.profile, 40)}
          alt={user.username}
        />
      </Link>
      <div className="post-form__input-group">
        <input
          name="text"
          id={postId}
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

export const PostCard = ({ data }) => {
  const [comments, setComments] = useState(data.comments ?? [])
  const [reactions, setReactions] = useState(data.reactions ?? {})

  return (
    <div className="post">
      <PostHeader
        userId={data.user}
      />

      <PostBody
        originalPostId={data.post}
      />

      <div className="post-footer">
        <PostMeta
          reactions={reactions}
          commentsCount={comments.length}
          sharesCount={data.shares?.length}
        />
        <PostActions
          postId={data.id}
          reactions={reactions}
          setReactions={setReactions}
        />
        <PostCommentList
          originalPostId={data.post.id}
          comments={comments}
        />
        <PostForm
          postId={data.id}
          addComment={setComments}
        />
      </div>
    </div>
  )
}
