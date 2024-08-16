import { useLayoutEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { useAuth } from '@app/hooks/useAuth'
import { useSocket } from '@app/hooks/useSocket'

import { AppRoutes } from '@app/routes/App.routes'
import { AuthRoutes } from '@app/routes/Auth.routes'
import { useAuthStore } from '@store/auth.store'

import '@app/assets/styles/config.css'
import '@app/assets/styles/app.css'
import '@app/assets/styles/auth.css'

export const App = () => {
  const { status } = useAuthStore()
  const { verifyToken } = useAuth()
  useSocket()

  useLayoutEffect(() => { 
    verifyToken()
  }, [])
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          { status === 'auth' && <Route path="/*" Component={ AppRoutes }/> }
          { status === 'no-auth' && <Route path="/*" Component={ AuthRoutes }/> }
        </Routes>
      </BrowserRouter>
    </>
  )
}
