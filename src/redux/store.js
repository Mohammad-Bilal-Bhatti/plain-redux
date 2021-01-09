import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./rootReducer"

import logger from "./middleware/logger"
import thunk from "./middleware/thunk"

const middlewaresEnhancers = applyMiddleware( logger, thunk )

const store = createStore( 
  rootReducer, 
  composeWithDevTools( middlewaresEnhancers ) 
)

export default store