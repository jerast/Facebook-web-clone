import http from 'node:http'
import express from 'express'

import { PORT } from '#config/environment.js'
import { Socket } from '#connection/socket.js'
import { mongodb } from '#connection/mongodb.js'
import { cors } from '#middlewares/cors.js'

export class Server {
  #app
  #server
  #socket

  constructor () {
    this.#app = express()
    this.#server = http.createServer( this.#app )
    this.#socket = new Socket( this.#server )
  }

  #db_connection () {
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
  }

  run () {
    this.#db_connection()
    this.#disableTags()
    this.#middlewares()

    this.#server.listen(PORT, () => console.log(`Server run on http://localhost:${PORT}`))
  }
}