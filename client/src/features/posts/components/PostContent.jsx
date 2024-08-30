import { Link } from 'react-router-dom'
import { POST_THEMES, SHORT_POST_LENG } from '@app/config/uiConstants'

const PostContentText = ({ content, image }) => {
	if (!content) return <></>

	const isShortContent = content.text.length <= SHORT_POST_LENG
	const postTheme = content.theme && POST_THEMES.find(bg => bg.id === content.theme)

	if (content.theme)
		return (
			<span
				className="post-content__text post-content__text--theme"
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
			<span className="post-content__text post-content__text--big">
				{content.text}
			</span>
		)

	return (
		<span className="post-content__text post-content__text--small">
			{content.text}
		</span>
	)
}

const PostContentImage = ({ postID, image }) => {
	if (!image)
		return <></>

	return (
		<Link to={`/post/${postID}`} style={{ background: image.color }} >
			<img className="post-content__image" src={image.url} style={{ background: image.color }} />
		</Link>
	)
}

export const PostContent = ({ postID, content, image }) => {
	return (
		<div className="post-content">
			<PostContentText 
				content={content} 
				image={image}
			/>
			<PostContentImage 
				postID={postID} 
				image={image} 
			/>
		</div>
	)
}