import { useEffect, useCallback, useState } from 'react'
import { socket as SocketIo } from '@shared/server/socket'

export const useSocket = () => {
  const [ socket, setSocket ] = useState(null)

  const connected = useCallback(() => {
    if (socket) return

    const token = localStorage.getItem('facebook-clone-token')
    const newSocket = SocketIo({ 'x-token': token }).connect()
    setSocket( newSocket )
  }, [])
  
  const disconnected = useCallback(() => {
    if (!socket) return

    socket?.disconnect()
    setSocket(null)
  }, [])
  
  useEffect(() => {
    socket?.on('connect', () => console.log('online'))
    socket?.on('disconnect', () => console.log('offline'))
    
    return () => { 
      socket?.off('connect') 
      socket?.off('disconnect') 
    }
  }, [socket])

  return {
    connected,
    disconnected,
  }
}
