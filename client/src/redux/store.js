import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './exampleSlice'
import userReducer from './userSlice'
import blogReducer from './blogSlice'
import catesReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    examples: exampleReducer,
    user: userReducer,
    blogs: blogReducer,
    cates: catesReducer,
  },
})
