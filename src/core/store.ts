import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'
import { userSlice } from '../features/UserSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch