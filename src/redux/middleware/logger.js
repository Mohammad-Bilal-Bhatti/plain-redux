const logger = store => next => action => {
  console.log( "LOGGER:: Dispatched: ", action )
  return next( action )
}

export default logger