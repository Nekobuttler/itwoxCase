/*
import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: "auth",
    initialState:{user : null , token : null},
    reducers: {
        setCredentials: (state, action) => {
            const {user , accessToken}  = action.payload
            state.user= user;
            state.token = accessToken 
        },
        logOut : (state, action) => {
            state.user =null ;
            state.token = null; 
        }
    }
})

export const {setCredentials , logOut} = authSlice.actions

export default authSlice.reducer 

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.token
*/

// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
})


export default authSlice.reducer