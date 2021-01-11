import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "user",
  initialState: {
    info: {},
    isLoading: false,
    error: null
  },
  reducers:{
    fetchUserBegin: (state, action) => {
      state.isLoading = true
    },
    fetchUserSuccess: (state, action) => {
      const { user } = action.payload  
      state.isLoading = false
      state.info = user
    },
    fetchUserError: (state, action) => {
      const { error } = action.payload
      state.isLoading = false
      state.error = error
    } 
  }

})

const { fetchUserBegin, fetchUserError, fetchUserSuccess } = slice.actions

// Define a thunk that dispatches those action creators
export const fetchUser = (userId) => dispatch => {
  dispatch(fetchUserBegin())
  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: `/users/${userId}`,
    method: "GET"
  })
  .then( response => {
    if ( response.status === 200 ){
      const user = response.data
      dispatch( fetchUserSuccess({ user }) )
    }
  })
  .catch( error => {
    dispatch( fetchUserError( { error } ) )
  })
}


export default slice.reducer