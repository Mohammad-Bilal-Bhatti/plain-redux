import { 
  ADD_POST, 
  FETCH_POST_SUCCESS, 
  FETCH_POST_ERROR, 
  FETCH_POST_BEGIN, 
  UPDATE_POST, 
  DELETE_POST,  
} from "../actions"

const initState = {
  posts: [],
  isLoading: false,
  lastFetch: null 
}

let nextId = 0

export default function( state = initState, action ){
  switch( action.type ){
    case FETCH_POST_BEGIN: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_POST_SUCCESS: {
      const { posts } = action.payload
      return {
        ...state,
        isLoading: false,
        lastFetch: Date.now(),
        posts: [ ...state.posts, ...posts ]
      }
    }
    case FETCH_POST_ERROR: {
      return {
        ...state,
        isLoading: false
      }
    }
    case ADD_POST: {
      const { title, body, userId } = action.payload
      const newpost = { id: ++nextId, userId, title, body }
      return {
        ...state,
        posts: [ ...state.posts, newpost]
      }
    }
    case UPDATE_POST: {
      const { postId, title, body } = action.payload
      const postIndex = state.posts.findIndex( post => post.id === postId )
      const oldPost = state.posts[postIndex] 
      const updatedPost = { ...oldPost, title, body }
      return {
        ...state,
        posts: [ ...state.posts.slice(0, postIndex), updatedPost, ...state.posts.slice(postIndex + 1) ]
      }
    }
    case DELETE_POST: {
      const { postId } = action.payload
      return {
        ...state,
        posts: [ ...state.posts.filter( post => post.id !== postId ) ]
      }
    }
    default: {
      return state
    } 
  }
}