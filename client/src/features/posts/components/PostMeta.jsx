import { EMOJI_LIST } from '@app/config/uiConstants'
import { getImage } from '@shared/utils/getImage'

export const PostMeta = ({ reactions, comments, shares }) => {
	const reactionList = Object.keys(reactions)
	const reactionUsersCount = Object.values(reactions).flat(1).length
	const reactionsCount = Object.values(reactions).filter(list => list.length).length
	const commentsCount = comments.length
	const sharesCount = shares.length

	if (!reactionsCount && !commentsCount && !sharesCount)
		return <></>

	return (
		<div className="post-meta">
			{!!reactionsCount &&
					<div className="post-meta__reactions">
						<div
							className="post-meta__reactions-emojis"
							style={{ width: reactionsCount * 18 + 6 }}
						>
							{
								reactionList.map(reaction =>
									!!reactions[reaction].length &&
										<img
											key={ reaction }
											src={ getImage(EMOJI_LIST[reaction].icon, 48, 48) }
											alt={ reaction }
											className="post-meta__reactions-emoji"
										/>
								)
							}
						</div>
						<p className="post-meta__reactions-counter">
							{ reactionUsersCount }
						</p>
					</div>
			}
			{!!commentsCount && (
					<p>
						{
							commentsCount > 1
								? commentsCount + ' comments'
								: commentsCount + ' comment'
						}
					</p>
			)}
			{!!sharesCount && (
					<p>
					{
						sharesCount > 1
							? sharesCount + ' shares'
							: sharesCount + ' share'
					}
				</p>
			)}
		</div>
	)
}
