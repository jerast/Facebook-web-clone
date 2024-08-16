import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const AuthStatus = {
  checking: 'checking',
  auth: 'auth',
  noAuth: 'no-auth'
}

export const useAuthStore = create(devtools(
  (set, get) => ({
    user: null,
    token: null,
    error: null,
    status: AuthStatus.checking,
    
    setUser: (user) => set({ user }, false, 'setUser'),
    setToken: (token) => set({ token }, false, 'setToken'),
    setError: (error) => set({ error }, false, 'setError'),
    clearUser: () => set({ user: null }, false, 'clearUser'),
    clearToken: () => set({ token: null }, false, 'clearToken'),
    clearError: () => set({ error: null }, false, 'clearError'),
    authChecking: () => set({ status: AuthStatus.checking }, false, 'authChecking'),
    authAuth: () => set({ status: AuthStatus.auth }, false, 'authAuth'),
    authNoAuth: () => set({ status: AuthStatus.noAuth }, false, 'authNoAuth'),
  })
))