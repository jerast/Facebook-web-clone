import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '@app/layouts/Auth.layout'
import { LoginPage } from '@auth/pages/Login.page'
import { SignupPage } from '@auth/pages/Signup.page'
import { NotFoundPage } from '@shared/components/NotFound.page'

export const AuthRoutes = () => 
  <AuthLayout>
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> }/>
      <Route path="/login" Component={ LoginPage }/>
      <Route path="/reg" Component={ SignupPage }/>

      <Route path="*" Component={ NotFoundPage } />
    </Routes>
  </AuthLayout> 