import bcrypt from 'bcryptjs'
import User from '#database/schemas/users.schema.js'

export default class UserModel {

	static createUser = async (data) => {
		try {
			const { firstName, lastName, email, password } = data

			const validUser = await User.findOne({ email }) // validate email
			if ( validUser ) return {
				ok: false,
				error: 'Email already in use'
			}

			const cryptedPassword = bcrypt.hashSync( // encrypt password
				password,
				bcrypt.genSaltSync()
			)

			const newUser = new User({ firstName, lastName, email, password: cryptedPassword })  // create / save user
			newUser.username = newUser.id
			await newUser.save()

			return {
				ok: true,
				newUser
			}
		}
		catch (error) {
			return {
				ok: false,
				error: 'Something was wrong'
			}
		}
	}

	static updateUser = async (data) => {
		try {
			const { id, ...updatedData } = data
			const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true })

			return {
				ok: true,
				updatedUser
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