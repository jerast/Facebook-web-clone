import bcrypt from 'bcryptjs'
import User from '#database/schemas/users.schema.js'
import { generateJWT } from '#jwt/jwt.js'

export default class AuthModel {

  static loginUser = async ({ email, username, password }) => {
    try {
      const user = await User.findOne({ $or: [{ email }, { username }] }) // validate email / username
      if ( !user ) return {
        ok: false,
        error: 'User / Password are not correct.',
      }

      const validPassword = bcrypt.compareSync( password, user.password ) // validate password
      if ( !validPassword ) return {
        ok: false,
        error: 'Email / Password are not correct.',
      }

      const token = await generateJWT({ uid: user.id }) // generate token

      return { 
        ok: true,
        user,
        token
      }
    } 
    catch (error) {
      console.log(error)
      return {
        ok: false,
        error: 'Something was wrong'
      }
    }
  }

  static renewToken = async (uid) => {
    try {
      const user = await User.findById( uid ) // verify uid
      
      const newToken = await generateJWT({ uid }) // generate token

      return {
        ok: true,
        user,
        newToken,
      }
    }
    catch (error) {
      return {
        ok: false,
        error: 'Something was wrong'
      }
    }
  }

}