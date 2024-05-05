// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'app/features/services/autoSlice'

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})
export default store