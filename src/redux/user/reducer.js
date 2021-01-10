
import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../actions"

const initState = {
  info: {},
  isLoading: false,
  error: null
}

const reducer = ( state = initState, action )  => {

  switch (action.type){
    case FETCH_USER_BEGIN:{
      return { ...state, isLoading: true }
    }
    case FETCH_USER_SUCCESS:{
      const { user } = action.payload
      return { ...state, info: {...user} , isLoading: false } 
    }
    case FETCH_USER_ERROR:{
      const { error } = anction.payload
      return { ...state, isLoading: false, error: error }
    }
    default: {
      return state
    }
  }
}


export default reducer