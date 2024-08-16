import { io } from 'socket.io-client'
import { SOCKET_PATH } from '@app/config/environment'

export const socket = (query) => 
  io( SOCKET_PATH, { 
    autoConnect: false,
    query,
  })
