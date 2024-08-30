import { Link } from 'react-router-dom'
import { useAppStore } from '@app/store/app.store'
import { getImage } from '@shared/utils/getImage'
import { POST_THEMES } from '@app/config/uiConstants'

export const PostSharedHeader = ({ user }) => {
	const  {} = user

	return (
		<div className="post-header">
			<Link to={ user.username }>
				<img
					className="post-header__profile"
					src={ getImage(user.profile, 40) }
					alt={ user.username }
				/>
			</Link>
			<div className="post-header__data">
				<Link
					className="post-header__username"
					to={ user.username }
				>
					{ user.name }
				</Link>
				<p className="post-header__date">
					<span>4 days ago · </span>
					<span>&#xF17E0;</span>
				</p>
			</div>
		</div>
	)
}

export const PostSharedCaption = ({ content }) => {
	if (!content)
		return <></>

	const postTheme = POST_THEMES.find(bg => bg.id === content.theme)

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

	return (
		<span className="post-content__text post-content__text--small">
			{content.text}
		</span>
	)
}

export const PostSharedImage = ({ postID, image }) => {
	if (!image)
		return <></>

	return (
		<Link to={`/post/${postID}`} style={{ background: image.color }} >
			<img className="post-content__image" src={image.url} style={{ background: image.color }} />
		</Link>
	)
}

export const PostSharedContent = ({ postRef }) => {
	const { users, posts } = useAppStore()
	const postRefered = posts.find(post => post.id === postRef)
	const userRefered = users.find(user => user.id === postRefered.user)

	return (
		<div className="post post--shared">
			<PostSharedImage postID={postRef} image={postRefered.image} />
			<PostSharedHeader user={userRefered} />
			<PostSharedCaption content={postRefered.content} />
		</div>
	)
}
