import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export default store;

// *********if combine reducer******
// import reducer from './reducer'
// // import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// // const store = createStore(reducer)
// const store = createStore(reducer ,{} ,applyMiddleware(thunk))

// export default store;