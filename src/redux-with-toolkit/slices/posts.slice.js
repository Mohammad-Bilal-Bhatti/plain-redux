import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let nextId = 1

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    isLoading: false,
    error: null,

    isPosting: false,
    postError: null
  },
  reducers:{
    addPost: (state, action) => {
      const { title, body, userId, id } = action.payload 
      const _id = (id)? id: nextId++  
      const post = {
        id: _id,
        title,
        body,
        userId
      }
      state.isPosting = false
      state.list.push( post )
    },
    deletePost: (state, action) => {
      const { postId } = action.payload 
      const postIndex = state.list.findIndex( post => post.id === postId )
      delete state.list[postIndex]
    },
    updatePost: (state, action) => {
      const { postId, title, body } = action.payload
      const postIndex = state.list.findIndex( post => post.id === postId )
      state.list[postIndex].title = title
      state.list[postIndex].body = body
    },
    setPosts: (state, action) => {
      const { posts } = action.payload
      state.isLoading = false
      state.list.push( ...posts )
    },

    fetchPostBegin: (state, action) => {
      state.isLoading = true
    },

    fetchPostError: (state, action) => {
      const { error } = action.payload
      state.isLoading = false
      state.error = error
    },

    makePostBegin: (state, action) => {
      state.isPosting = true
      state.postError = null
    },

    makePostError: (state, action) => {
      const { error } = action.payload

      state.isPosting = false
      state.postError = error

    } 

  }
})


const { fetchPostBegin, fetchPostError, makePostBegin, makePostError } = slice.actions

export const { setPosts, addPost, updatePost, deletePost,   } = slice.actions 

export const fetchPosts = () => dispatch => {
  dispatch( fetchPostBegin() )
  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/posts",
    method: "GET"
  })
  .then( response => {
    if ( response.status === 200){
      const posts = response.data
      dispatch( setPosts({ posts }) )
    }
  })
  .catch( error => {
    dispatch( fetchPostError({error}) )
  })
}

export const makePost = (userId, title, body) => dispatch => {
  dispatch( makePostBegin() )
  axios.request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/posts",
    method: "POST",
    data: {
      userId,
      title,
      body
    }
  })
  .then( response => {
    if (response.status === 201){
      dispatch( addPost({ userId, title, body, ...response.data }) )
    }
  })
  .catch( error => {
    dispatch( makePostError({ error }) )
  })
}








export default slice.reducer