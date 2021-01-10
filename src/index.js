
import store from "./redux/store"

import { 
  addPost, 
  updatePost, 
  deletePost, 
  fetchPosts,
  fetchUser,
  auth
} from "./redux/actions"


store.dispatch( addPost(1, 'Introduction to programming', '...') )
store.dispatch( addPost(1, 'Introduction to software engineering', '...') )
store.dispatch( addPost(1, 'Introduction to colud computing', '...') )

store.dispatch( updatePost( 2, 'Introduction to engineering', '...' ))
store.dispatch( deletePost(3) )

store.dispatch( fetchPosts() )

const userId = 1 
store.dispatch( fetchUser(userId) )

store.dispatch( auth('fakeemail@domain.com', '1234567') )

console.log('store: ', store.getState())
