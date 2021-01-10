
import { AUTH_USER_BEGIN, AUTH_USER_ERROR, AUTH_USER_SUCCESS } from "../actions"


const token = localStorage.getItem('token')

const initState = {
  isLoading: false,
  token,
  error: null,  
}

const reducer = (state = initState, action) => {
  switch( action.type ){
    case AUTH_USER_BEGIN: {
      return { 
        ...state, 
        isLoading: true 
      }
    }
    case AUTH_USER_SUCCESS: {
      const { token } = action.payload
      return {
        ...state,
        isLoading: false,
        token 
      }
    }
    case AUTH_USER_ERROR: {
      const { error } = action.payload
      return {
        ...state,
        isLoading: false,
        error 
      }
    }
    default: {
      return state
    }
  }
}

export default reducer