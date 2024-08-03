import mongoose from 'mongoose'
import { DB_URI } from '#config/environment.js'

export const mongodb = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log('DB connected!')
  } 
  catch (error) {
    console.log(error)
    throw new Error('DB connection failed! See logs.')
  }
}