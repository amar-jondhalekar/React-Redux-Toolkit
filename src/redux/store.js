import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/couter/couterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
// Steps: 
// create store
// wrap app component under Provider
// create Slice 
// register reducer in store  