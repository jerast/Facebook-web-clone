import { useLayoutEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { useAuth } from '@app/hooks/useAuth'

import { AppRoutes } from '@app/routes/App.routes'
import { AuthRoutes } from '@app/routes/Auth.routes'
import { useAuthStore } from '@store/auth.store'

export const App = () => {
  const { status } = useAuthStore()
  const { verifyToken } = useAuth()

  useLayoutEffect(() => { 
    verifyToken()
  }, [])

  const appRouter = () => {
    switch (status) {
      case 'auth': 
        return <Route path="*" element={ <AppRoutes /> }/>
      case 'no-auth': 
        return <Route path="*" element={ <AuthRoutes /> }/>
      default: 
        return <Route path="*" element={ <></> }/>
    }
  }

  return ( 
    <>
      <BrowserRouter>
        <Routes>
          { appRouter() }
        </Routes>
      </BrowserRouter>
    </>
  )
}
