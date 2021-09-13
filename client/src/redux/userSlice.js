import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const LoginAction = createAsyncThunk('login', async (user) => {
  try {
    const response = await axios.post('/users/login', user)
    if (response) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
  } catch (err) {
    console.log(err)
  }
  return
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    pending: false,
    error: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      localStorage.setItem('user', JSON.stringify(state.user))
    },
  },
  extraReducers: {
    [LoginAction.pending]: (state) => {
      state.pending = true
      state.error = false
    },
    [LoginAction.fulfilled]: (state, action) => {
      state.user = action.payload
      state.pending = false
    },
    [LoginAction.rejected]: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
