import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'linkedin',
    initialState:{
        users:[],
        isEdit:false
    },
    reducers:{
        addUserInfo:(state,action)=>{
            const existsuser = state.users.find(user=>user.id === action.payload.id)
            if(!existsuser){
                state.users.push(action.payload) 
            }
        },
        isEdit:(state,action)=>{
            state.isEdit = action.payload
        }
    }
})
export const {addUserInfo,isEdit}=userSlice.actions
export default userSlice.reducer