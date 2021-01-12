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


// --------------------- redux using @redux/toolkit ------------------------------------

import toolkitStore from "./redux-with-toolkit/store"

import { fetchUser as toolkitFetchUser } from "./redux-with-toolkit/slices/user.slice"
import { makePost } from "./redux-with-toolkit/slices/posts.slice"
import { 
  fetchPosts as toolkitFetchPost , 
  addPost as toolkitAddPost, 
  updatePost as toolkitUpdatePost, 
  deletePost as toolkitDeletePost, 
  setPosts as toolkitSetPosts, 
} from "./redux-with-toolkit/slices/posts.slice"

toolkitStore.dispatch( toolkitAddPost({ userId: 1, title:"title", body: "body" }) )
toolkitStore.dispatch( toolkitAddPost({ userId: 1, title:"title", body: "body" }) )
toolkitStore.dispatch( toolkitAddPost({ userId: 1, title:"title", body: "body" }) )

toolkitStore.dispatch( toolkitSetPosts({ posts: [{id: 1},{id: 2},{id: 3}] }) )

toolkitStore.dispatch( toolkitDeletePost({ postId: 1 }) )

toolkitStore.dispatch( toolkitUpdatePost( { postId: 1, title: "new title", body: "new body"  } ) )

toolkitStore.dispatch( toolkitFetchUser(1) )
toolkitStore.dispatch( toolkitFetchPost() )

toolkitStore.dispatch( makePost(1, 'title...', 'body...') )

console.log('toolkitStore: ', stoolkitStoretore)
