import { useState, useEffect } from 'react'
import { useAuthStore } from '@app/store/auth.store'
import { getImage } from '@shared/utils/getImage'
import { EMOJI_LIST, SHOW_EMOJIS_TIME } from '@app/config/uiConstants'

const LikeActionButton = ({ reactions, setReactions }) => {
	const { user } = useAuthStore()
	const [ likeState, setLikeState ] = useState(null)
	const [ likeTimer, setLikeTimer ] = useState(null)
	const [ showEmojis, setShowEmojis ] = useState(false)

	useEffect(() => {
		const userReaction = Object
			.keys(reactions)
			.find(key => reactions[key]?.includes(user.id))

		if (userReaction) {
			setLikeState( EMOJI_LIST[userReaction] )
		}
	}, [])

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

	return (
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
							src={getImage(likeState.icon, 48, 48)}
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
									src={getImage(emoji[1].icon, 48, 48)}
									data-name={emoji[0]}
									className="post-actions__emoji-item"
								/>
						)}
					</div>
			}
		</button>
	)
}

const CommentActionButton = ({ postID }) => {
	const onCommentInputFocus = () => {
		document.getElementById(postID).focus()
	}

	return (
		<button
			className="post-actions__button"
			onClick={onCommentInputFocus}
		>
			<span className="post-actions__symbol">&#xF0379;</span>
			<span className="post-actions__text">Comment</span>
		</button>
	)
}

const ShareActionButton = () => {
	return (
		<button className="post-actions__button">
			<span className="post-actions__symbol">&#xF037A;</span>
			<span className="post-actions__text">Share</span>
		</button>
	)
}

export const PostActions = ({ postID, reactions, setReactions }) => {
	return (
		<div className="post-actions">
			<LikeActionButton
				reactions={reactions}
				setReactions={setReactions}
			/>

			<CommentActionButton
				postID={postID}
			/>

			<ShareActionButton />
		</div>
	)
}
