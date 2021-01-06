import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)
export default store

// *********if combine reducer******
// import reducer from './reducer'
// // import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// // const store = createStore(reducer)
// const store = createStore(reducer ,{} ,applyMiddleware(thunk))

// export default store;