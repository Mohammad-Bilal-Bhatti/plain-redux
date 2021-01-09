import axios from "axios"

import { 
  ADD_POST, 
  UPDATE_POST, 
  DELETE_POST, 
  FETCH_POST_BEGIN, 
  FETCH_POST_ERROR, 
  FETCH_POST_SUCCESS  
} from "../actions"


export const addPost = (userId, title, body,) => {
  return {
    type: ADD_POST,
    payload: {
      userId,
      title,
      body
    }
  }
}

export const updatePost = (postId, title, body) => {
  return {
    type: UPDATE_POST,
    payload:{
      postId,
      title,
      body
    }
  }
}

export const deletePost = ( postId ) => {
  return {
    type: DELETE_POST,
    payload: {
      postId
    }
  }  
}

export const fetchPostBegin = () => {
  return {
    type: FETCH_POST_BEGIN 
  }
}

export const fetchPostError = () => {
  return {
    type: FETCH_POST_ERROR 
  }
}

export const fetchPostSuccess = posts => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: {
      posts: posts
    } 
  }
}

export const fetchPosts = () => ({ dispatch }) => {

  dispatch( fetchPostBegin() )

  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/posts"
  })
  .then( response => {
    if ( response.status === 200 ){
      const posts = response.data
      return dispatch( fetchPostSuccess( posts ) )
    }
    dispatch( fetchPostError() )
  })
  .catch( error => {
    console.error('Error: ', error)
    dispatch( fetchPostError() )
  })

} 

