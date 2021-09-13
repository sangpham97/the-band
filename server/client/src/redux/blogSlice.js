import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosIstance } from '../config'

export const getBlogs = createAsyncThunk('/blogs', async (qurey) => {
  const response = await axiosIstance.get('/posts/' + qurey)
  return response.data
})

export const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    pending: false,
    error: false,
    blog: [],
  },
  reducers: {
    getBlog: (state, action) => {
      state.blog = action.payload
    },
  },
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.pending = false
      state.blogs = action.payload
    },
    [getBlogs.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { getBlog } = blogSlice.actions
export default blogSlice.reducer
