import { Server as SocketServer } from 'socket.io'
import { ALLOWED_IPS } from '#config/settings.js'

export class Socket {
  #io

  constructor (server) {
    this.#io = new SocketServer( server, { cors: { origin: ALLOWED_IPS }} )
    this.#socketEvents()
  }

  #socketEvents () {
    this.#io.on('connection', async (socket) => {

      this.#connected(socket)
      socket.on('disconnect', () => this.#disconnected(socket.id))

    })
  }

  #connected (socket) {
    console.log(socket.id, 'connected')
    socket.emit('connected')
  }

  #disconnected (socketId) {
    console.log(socketId, 'disconnected')
  }

}