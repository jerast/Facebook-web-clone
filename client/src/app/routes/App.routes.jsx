import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@app/layouts/Main.layout'
import { HomePage } from '@app/pages/Home.page'
import { UserPage } from '@users/pages/User.page'
import { NotFoundPage } from '@shared/components/NotFound.page'

export const AppRoutes = () => 
  <MainLayout>
    <Routes>
      <Route path="/" Component={ HomePage } />
      <Route path="/user/:id" Component={ UserPage } />

      <Route path="*" Component={ NotFoundPage } />
    </Routes>
  </MainLayout> 