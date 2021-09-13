import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { axiosIstance } from '../config'

export const getExamples = createAsyncThunk('/examples', async (examples) => {
  const response = await axiosIstance.get('/examples')
  return response.data
})

export const exampleSlice = createSlice({
  name: 'examples',
  initialState: {
    examples: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getExamples.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [getExamples.fulfilled]: (state, action) => {
      state.pending = false
      state.examples = action.payload
    },
    [getExamples.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { updateStart, updateSuccess, updateFailure } =
  exampleSlice.actions
export default exampleSlice.reducer
