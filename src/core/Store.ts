import { configureStore } from '@reduxjs/toolkit'
import itemsSlide from '../features/items/itemSlide'
import counterSlide from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    items: itemsSlide,
    counter: counterSlide
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch