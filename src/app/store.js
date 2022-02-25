import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../modules/dashboard/dashboard-slice'

const store = configureStore({
  reducer: {
      dashboard: dashboardReducer
  },
})

export default store