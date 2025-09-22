import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'linkedin',
    initialState:{
        users:[],
    },
    reducers:{
        addUserInfo:(state,action)=>{
            const existsuser = state.users.find(user=>user.id === action.payload.id)
            if(!existsuser){
                state.users.push(action.payload) 
            }
        }
    }
})
export const {addUserInfo}=userSlice.actions
export default userSlice.reducer