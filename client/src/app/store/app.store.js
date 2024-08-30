import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { posts, users } from '@app/config/uiConstants'

const AppStatus = {
	connected: 'connected',
	loading: 'loading',
	disconnected: 'disconnected'
}

export const useAppStore = create(devtools(
	(set, get) => ({
		status: AppStatus.disconnected,
		users: [...users],
		posts: [...posts],

		appLoading: () => set({ status: AppStatus.loading }, false, 'appLoading'),
		appConnected: () => set({ status: AppStatus.connected }, false, 'appConnected'),
		appDisconnected: () => set({ status: AppStatus.disconnected }, false, 'appDisconnected'),
	})
))
