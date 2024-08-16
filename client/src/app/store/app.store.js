import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const AppStatus = {
  connected: 'connected',
  loading: 'loading',
  disconnected: 'disconnected'
}

export const useAppStore = create(devtools(
  (set, get) => ({
    socket: null,
    status: AppStatus.disconnected,

    setSocket: (socket) => set({ socket }, false, 'setSocket'),
    clearSocket: () => set({ socket: null }, false, 'clearSocket'),
    appLoading: () => set({ status: AppStatus.loading }, false, 'appLoading'),
    appConnected: () => set({ status: AppStatus.connected }, false, 'appConnected'),
    appDisconnected: () => set({ status: AppStatus.disconnected }, false, 'appDisconnected'),
  })
))