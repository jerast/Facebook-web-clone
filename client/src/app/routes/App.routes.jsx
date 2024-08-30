import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@app/pages/Home.page'
import { UserPage } from '@users/pages/User.page'
import { PostPage } from '@posts/pages/Post.page'
import { StoryPage } from '@stories/pages/Story.page'
import { NotFoundPage } from '@app/pages/NotFound.page'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage /> } />
			<Route path="/story/:id" element={ <StoryPage /> } />
			<Route path="/post/:id" element={ <PostPage /> } />
			<Route path="/:id" element={ <UserPage /> } />

			<Route path="*" element={ <NotFoundPage /> } />
		</Routes>
	)
}
