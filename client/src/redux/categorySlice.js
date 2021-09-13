import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCates = createAsyncThunk('/cates', async () => {
  const response = await axios.get('/categories')
  return response.data
})

export const catesSlice = createSlice({
  name: 'cates',
  initialState: {
    cates: [],
    pending: false,
    error: false,
    cate: [],
  },
  reducers: {
    updateCate: (state, action) => {
      state.cate = action.payload
    },
  },
  extraReducers: {
    [getCates.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getCates.fulfilled]: (state, action) => {
      state.pending = false
      state.cates = action.payload
    },
    [getCates.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { updateCate } = catesSlice.actions
export default catesSlice.reducer
