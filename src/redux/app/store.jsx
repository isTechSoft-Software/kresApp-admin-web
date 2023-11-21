import { configureStore } from '@reduxjs/toolkit'
import pageSlice from '../features/page/pageSlice'
import loginSlice from '../features/login/loginSlice'
import schoolsSlice  from '../features/schools/schools'
import  usersSlice  from '../features/users/users'
import  gainsSlice  from '../features/dashboardStates/dashboardStates'

export const store = configureStore({
  reducer: {
    page: pageSlice,
    login: loginSlice,
    schools: schoolsSlice,
    users: usersSlice,
    gains: gainsSlice

  },
})