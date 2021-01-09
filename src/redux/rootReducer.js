import { combineReducers } from "redux"

import postReducer from "./posts/reducer"

const rootReducer = combineReducers({
  posts: postReducer
})

export default rootReducer