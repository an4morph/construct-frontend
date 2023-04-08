import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../services/api'

const initialState = {
  data: null,
  getData: {
    status: null,
    error: null
  }
}

const getData = createAsyncThunk('project-list/getData', async (id) => {
  const response = await api.getData('/projects/list', { secure: true })
  const data = await response.json()
  return data
})

export const projectListSlice = createSlice({
  name: 'project-list',
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = null
      state.getData = {
        status: null,
        error: null
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
      state.getData.status = 'fulfilled'
      state.getData.error = null
    })
    builder.addCase(getData.pending, (state, action) => {
      state.data = null
      state.getData.status = 'pending'
      state.getData.error = null
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.data = null
      state.getData.status = 'rejected'
      state.getData.error = action.payload
    })
  },
})

export const projectListActions = {
  getData,
  ...projectListSlice.actions
}

export default projectListSlice.reducer
