import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../services/api'

const initialState = {
  project: null,
  getProjectInfo: {
    status: null,
    error: null
  }
}

const getProjectInfo = createAsyncThunk('auth/getProjectInfo', async (id) => {
  const response = await api.getData(`/projects/detail/${id}`, { secure: true })
  const data = await response.json()
  return data
})

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    resetProjectInfo: (state) => {
      state.project = null
      state.getProjectInfo = {
        status: null,
        error: null
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectInfo.fulfilled, (state, action) => {
      state.project = action.payload
      state.getProjectInfo.status = 'fulfilled'
      state.getProjectInfo.error = null
    })
    builder.addCase(getProjectInfo.pending, (state, action) => {
      state.project = null
      state.getProjectInfo.status = 'pending'
      state.getProjectInfo.error = null
    })
    builder.addCase(getProjectInfo.rejected, (state, action) => {
      state.project = null
      state.getProjectInfo.status = 'rejected'
      state.getProjectInfo.error = action.payload
    })
  },
})

export const projectActions = {
  getProjectInfo,
  ...projectSlice.actions
}

export default projectSlice.reducer
