import axios from "axios"
import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../actions"

const fetchUserBegin = () => {
  return {
    type: FETCH_USER_BEGIN
  }
} 
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      user 
    }
  }
} 
const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: {
      error
    }
  }
} 

export const fetchUser = userId => ({dispatch, getState}) => {
  dispatch( fetchUserBegin() )
  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: `/users/${userId}`,
    method: 'GET'
  })
  .then( response => {
    if ( response.status === 200 ){
      const user = response.data
      dispatch( fetchUserSuccess(user) )     
    }else{
      const errorMessage = {
        status: response.status,
        message: response.statusText
      }
      dispatch( fetchUserError(errorMessage) )
    }

  })
  .catch( error => {
    dispatch( error )
  })
}