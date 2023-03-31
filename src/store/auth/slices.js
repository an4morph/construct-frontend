import { createSlice } from '@reduxjs/toolkit'
import { logout } from './actions'
import { setStatusesInStore } from '../../services/utils'

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith('auth'), 
      setStatusesInStore
    )
  },
})

export default authSlice.reducer
