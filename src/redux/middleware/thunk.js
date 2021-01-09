const thunk = store => next => action => {
  if ( typeof action === 'function' ) action(store)  // Execute that action.
  next( action )
}

export default thunk