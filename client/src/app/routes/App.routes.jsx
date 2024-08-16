import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@app/layouts/Main.layout'
import { PostsPage } from '@posts/pages/Posts.page'
import { UserPage } from '@users/pages/User.page'
import { PostPage } from '@posts/pages/Post.page'
import { NotFoundPage } from '@shared/components/NotFound.page'

export const AppRoutes = () => 
  <MainLayout>
    <Routes>
      <Route path="/" Component={ PostsPage }/>
      <Route path="/user/:id" Component={ UserPage }/>
      <Route path="/post/:id" Component={ PostPage }/>

      <Route path="*" Component={ NotFoundPage } />
    </Routes>
  </MainLayout> 