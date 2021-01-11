import { combineReducers } from "@reduxjs/toolkit"

import userSlice from "./slices/user.slice"
import postSlice from "./slices/posts.slice"

export default combineReducers({
  user: userSlice,
  posts: postSlice
})