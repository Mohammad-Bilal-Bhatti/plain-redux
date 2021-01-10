import { combineReducers } from "redux"

import postReducer from "./posts/reducer"
import userReducer from "./user/reducer"
import authReducer from "./auth/reducer"

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  auth: authReducer,
})

export default rootReducer