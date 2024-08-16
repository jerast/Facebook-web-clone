import { useEffect, useCallback } from 'react'
import { useAuthStore } from '@app/store/auth.store'
import { useAppStore } from '@app/store/app.store'
import { socket as SocketIo } from '@shared/server/socket'

export const useSocket = () => {
  const { status } = useAuthStore()
  const { socket, setSocket, clearSocket, appConnected, appDisconnected } = useAppStore()

  const connected = useCallback(() => {
    if (socket) return

    const token = localStorage.getItem('facebook-clone-token')
    setSocket( SocketIo({ 'x-token': token }).connect() )
    appConnected()
  }, [])
  
  const disconnected = useCallback(() => {
    socket?.disconnect()
    clearSocket()
    appDisconnected(false)
  }, [])
  
  useEffect(() => {
    socket?.on('connect', appConnected)
    socket?.on('disconnect', appDisconnected)
    
    return () => {
      socket?.off('connect')
      socket?.off('disconnect')
    }
  }, [socket])

  useEffect(() => {
    status === 'auth'
      ? connected()
      : disconnected()
  }, [status])

  return {
    
  }
}
