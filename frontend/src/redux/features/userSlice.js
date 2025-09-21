import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'linkedin',
    initialState:{
        value:null,
    },
    reducers:{
        addUserInfo:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {addUserInfo}=userSlice.actions
export default userSlice.reducer