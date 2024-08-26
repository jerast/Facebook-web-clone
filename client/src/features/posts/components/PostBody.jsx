import { Link } from 'react-router-dom'
import { useAppStore } from '@app/store/app.store'
import { POST_THEMES, SHORT_POST_LENG } from '@app/config/uiConstants'

export const PostBody = ({ postRef }) => {
  const { posts } = useAppStore()
  const { content, image } = posts.find(post => post.id === postRef)
  
  const contentText = () => {
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

  const contentImage = () => {
    if (!image)
      return <></>

    return (
      <Link to={`/post/${postRef}`}>
        <img className="post-body__image" src={image.url} style={{ background: image.color }} />
      </Link>
    )
  }

  return (
    <div className="post-body">
      { contentText() }
      { contentImage() }
    </div>
  )
}
