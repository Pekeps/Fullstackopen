import { createSlice } from "@reduxjs/toolkit"


const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notificationChange(state, action) {
      const { payload } = action
      return payload
    }
  }
})
export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer