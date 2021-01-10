import axios from "axios"

import { 
  AUTH_USER_BEGIN,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,

} from "../actions"

const authBegin = () => {
  return {
    type: AUTH_USER_BEGIN
  }
} 

const authSuccess = (token) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: {
      token
    }
  }
}

const authError = (error) => {
  return{
    type: AUTH_USER_ERROR,
    payload: {
      error 
    }
  }
}

export const auth = ( email, password ) => ({dispatch, getState}) => {
  dispatch( authBegin() )
  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/users/1",  
    method: "GET", // Method will be POST for real AUTH
    data: {
      email,
      password
    }
  })
  .then( response => {
    if( response.status === 200 ){
      const user = response.data
      const token = "fake-token" 
      dispatch( authSuccess(token) )
    }else{
      const errorMessage = {
        status: response.status,
        message: response.statusText
      }
      dispatch( authError(errorMessage) )
    }
  })
  .catch( error => {
    dispatch( authError(error) )
  })
} 


