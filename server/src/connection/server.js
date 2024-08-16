import http from 'node:http'
import express from 'express'
import fileUpload from 'express-fileupload'

import { PORT } from '#config/environment.js'
import { Socket } from '#connection/socket.js'
import { mongodb } from '#connection/mongodb.js'
import { cors } from '#middlewares/cors.js'

import authRoutes from '#routes/auth.routes.js'
import usersRoutes from '#routes/users.routes.js'

export class Server {
  #app
  #server
  #socket

  constructor () {
    this.#app = express()
    this.#server = http.createServer( this.#app )
    this.#socket = new Socket( this.#server )
  }

  #database () {
    mongodb()
  }

  #disableTags () {
    this.#app.disable( 'x-powered-by' )
    this.#app.disable( 'etag' )
  }

  #middlewares () {
    this.#app.use( cors() )
    this.#app.use( express.json() )
    this.#app.use( express.static(`${process.cwd()}/public`) )
    this.#app.use( fileUpload({
      useTempFiles: true,
      tempFileDir: './uploads'
    }))
  }

  #routes () {
    this.#app.use( '/api/auth', authRoutes )
    this.#app.use( '/api/users', usersRoutes )
  }

  run () {
    this.#database()
    this.#disableTags()
    this.#middlewares()
    this.#routes()

    this.#server.listen(PORT, () => console.log(`Server run on http://localhost:${PORT}`))
  }
}