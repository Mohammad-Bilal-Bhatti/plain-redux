import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let nextId = 1

const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers:{
    addPost: (state, action) => {
      const { title, body, userId } = action.payload 
      const post = {
        id: nextId++,
        title,
        body,
        userId
      }
      state.push( post )
    },
    deletePost: (state, action) => {
      const { postId } = action.payload 
      const postIndex = state.findIndex( post => post.id === postId )
      delete state[postIndex]
    },
    updatePost: (state, action) => {
      const { postId, title, body } = action.payload
      const postIndex = state.findIndex( post => post.id === postId )
      state[postIndex].title = title
      state[postIndex].body = body
    },
    setPosts: (state, action) => {
      const { posts } = action.payload
      state.push( ...posts )
    }
  }
})




export const { setPosts, addPost, updatePost, deletePost  } = slice.actions 

export const fetchPosts = () => dispatch => {
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

  })
}








export default slice.reducer