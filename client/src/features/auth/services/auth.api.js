import api from '@shared/server/api'

export const apiLogIn = async (logInData) => {
	try {
		const { data } = await api.post( '/auth/login', logInData )
		return data
	} catch ({ response }) {
		return response.data
	}
}

export const apiSignUp = async (signUpData) => {
	try {
		const { data } = await api.post( '/users', signUpData )
		return data
	} catch ({ response }) {
		return response.data
	}
}

export const apiVerifyToken = async (token) => {
	try {
		const { data } = await api.get( '/auth/renew' )
		return data
	} catch ({ response }) {
		return response.data
	}
}