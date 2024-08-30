import { Link } from 'react-router-dom'
import { useAuthStore } from '@app/store/auth.store'
import { getImage } from '@shared/utils/getImage'

export const NewPostCard = () => {
	const { user } = useAuthStore()

	return (
		<section className="new-post-card">
			<Link to={`/${user.username}`}>
				<img
					className="new-post-card__profile"
					src={getImage(user.profile, 40)}
					alt={user.username}
				/>
			</Link>
			<button
				className="new-post-card__input-button"
				type="text"
			>
				{`What's on your mind, ${user.firstName}?`}
			</button>
			<button className="new-post-card__img-button">&#xF160B;</button>
		</section>
	)
}
