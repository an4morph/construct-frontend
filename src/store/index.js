import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/login/fulfilled') localStorage.setItem('token', action.payload?.token)
  if (action.type === 'auth/signin/fulfilled') localStorage.setItem('token', action.payload?.token)
  if (action.type === 'auth/logout') localStorage.removeItem('token')
  return next(action);
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
})

export default store