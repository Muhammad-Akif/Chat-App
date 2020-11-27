import { combineReducers } from 'redux'
import app_reducer from './app_reducer'
import auth_reducer from './auth_reducer'

export default combineReducers({
    auth : auth_reducer,
    app : app_reducer
})