import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { news, posts, users } from '@app/config/uiConstants'

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
    news: [...news],

    appLoading: () => set({ status: AppStatus.loading }, false, 'appLoading'),
    appConnected: () => set({ status: AppStatus.connected }, false, 'appConnected'),
    appDisconnected: () => set({ status: AppStatus.disconnected }, false, 'appDisconnected'),

    addComment: (postId, newComment) => {
      const { news } = get()
      const findNew = news.find(item => item.id === postId)
      
      const comments = structuredClone(findNew.comments) ?? []
      comments.push(newComment)
      console.log()

      return set({ news }, false, 'addComment')
    },

    addComment: (postId, newComment) => 
      set(state => {
        const newsCopy = state.news.map(item => 
          item.id === postId
            ? { 
                ...item, 
                comments: item.comments 
                  ? [...item.comments, newComment]
                  : [ newComment ]
              } 
            : item
        )
        return { news: newsCopy }
      }
    )
  })
))
