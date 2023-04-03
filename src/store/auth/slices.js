import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../services/api'

const initialState = {
  user: null,
  getUserInfo: {
    status: null,
    error: null
  },
  login: {
    status: null,
    error: null
  },
  signin: {
    status: null,
    error: null
  }
}

const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  const user = await api.getData('/me', { secure: true })
  return user
})

const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await api.postData('/login', { data })
    const resData = await response.json()
    if (!response.ok) throw new Error(resData)
    return resData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const signin = createAsyncThunk('auth/signin', async (data, thunkAPI) => {
  try {
    const response = await api.postData('/signin', { data })
    const resData = await response.json()
    if (!response.ok) throw new Error(resData)
    return resData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload.data
      state.getUserInfo.status = 'fulfilled'
      state.getUserInfo.error = null
    })
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.user = null
      state.getUserInfo.status = 'pending'
      state.getUserInfo.error = null
    })
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.user = null
      state.getUserInfo.status = 'rejected'
      state.getUserInfo.error = action.payload
    })

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data
      state.login.status = 'fulfilled'
      state.login.error = null
    })
    builder.addCase(login.pending, (state, action) => {
      state.user = null
      state.login.status = 'pending'
      state.login.error = null
    })
    builder.addCase(login.rejected, (state, action) => {
      state.user = null
      state.login.status = 'rejected'
      state.login.error = action.payload
    })

    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload.data
      state.signin.status = 'fulfilled'
      state.signin.error = null
    })
    builder.addCase(signin.pending, (state, action) => {
      state.user = null
      state.signin.status = 'pending'
      state.signin.error = null
    })
    builder.addCase(signin.rejected, (state, action) => {
      state.user = null
      state.signin.status = 'rejected'
      state.signin.error = action.payload
    })
  },
})

export const authActions = {
  getUserInfo, 
  login,
  signin,
  ...authSlice.actions
}

export default authSlice.reducer
