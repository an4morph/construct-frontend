import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../services/api'

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  const user = await api.getData('/me', { secure: true })
  return user
})

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await api.postData('/login', { data })
    const resData = await response.json()
    if (!response.ok) throw new Error(resData)
    return resData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const signin = createAsyncThunk('auth/signin', async (data, thunkAPI) => {
  try {
    const response = await api.postData('/signin', { data })
    const resData = await response.json()
    if (!response.ok) throw new Error(resData)
    return resData
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = (state) => {
  state.user = null
}
