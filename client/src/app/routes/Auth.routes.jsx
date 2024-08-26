import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '@app/layouts/Auth.layout'
import { LoginPage } from '@auth/pages/Login.page'
import { SignupPage } from '@auth/pages/Signup.page'
import { NotFoundPage } from '@app/pages/NotFound.page'

export const AuthRoutes = () => 
  <AuthLayout>
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> }/>
      <Route path="/login" element={ <LoginPage /> }/>
      <Route path="/reg" element={ <SignupPage /> }/>

      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  </AuthLayout>
