import { configureStore } from '@reduxjs/toolkit'
import mortySlice from './mortySlice'

export default configureStore({
  reducer: {
    app: mortySlice
  }
})
