import { configureStore } from '@reduxjs/toolkit'
import linkedin from '../redux/features/userSlice'
const store = configureStore({
    reducer:linkedin
})
export default store