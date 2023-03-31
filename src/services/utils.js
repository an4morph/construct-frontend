export const setStatusesInStore = (state, action) => {
  const actionName = action.type.split('/')[1]
  const status = action.meta.requestStatus
  state[actionName].status = status
  state[actionName].error = status === 'rejected' ? action.payload : null
}