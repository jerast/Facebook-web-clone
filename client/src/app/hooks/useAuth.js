import { useCallback } from 'react'
import { useAuthStore } from '@app/store/auth.store'
import { apiLogIn, apiSignUp, apiVerifyToken } from '@auth/services/auth.api'
import { useSocket } from './useSocket'

export const useAuth = () => {
	const {
		setUser,
		setToken,
		setError,
		clearUser,
		clearToken,
		clearError,
		authChecking,
		authAuth,
		authNoAuth,
	} = useAuthStore()
	// const {
	//   connected,
	//   disconnected
	// } = useSocket()

	const setSession = useCallback((user, token) => {
		localStorage.setItem('facebook-clone-token', token)

		authAuth()
		setUser(user)
		setToken(token)
		// connected()
		clearError()
	}, [])

	const clearSession = useCallback((error = null) => {
		localStorage.removeItem('facebook-clone-token')

		authNoAuth()
		clearUser()
		clearToken()
		// disconnected()
		error && setError(error)
	}, [])


	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem('facebook-clone-token')
		if (!token) return clearSession()

		const { ok, user, newToken, error } = await apiVerifyToken()

		return ok
			? setSession(user, newToken)
			: clearSession(error)
	}, [])

	const logIn = useCallback(async (loginData) => {
		authChecking()

		const { ok, user, token, error } = await apiLogIn(loginData)

		ok
			? setSession(user, token)
			: clearSession(error)

		return { ok, error }
	}, [])

	const signUp = useCallback(async (signupData) => {
		const { ok, error } = await apiSignUp(signupData)

		return { ok, error }
	}, [])

	const logOut = useCallback(() => {
		clearSession()
	}, [])

	return {
		verifyToken,
		logIn,
		logOut,
		signUp,
	}
}
