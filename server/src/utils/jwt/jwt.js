import jwt from 'jsonwebtoken'
import { JWT_SEED } from '#config/environment.js'

export const generateJWT = (data) =>
	new Promise((resolve, reject) => {
		const payload = data
		const options = { expiresIn: '1w' }

		jwt.sign(
			payload,
			JWT_SEED,
			options,
			(error, token) => {
				error
					? reject('Could not generate token')
					: resolve(token)
			}
		)
	})

export const verifyJWT = (token) => {
	try {
		const { uid } = jwt.verify( token, JWT_SEED )
		return {
			ok: true,
			payload: { uid },
		}
	}
	catch (error) {
		return {
			ok: false,
			error,
		}
	}
}