import { configureStore } from '@reduxjs/toolkit'
import documentationSlice from './documentationSlice'

export const store = configureStore({
  reducer: {
    documentation:documentationSlice
  },
})