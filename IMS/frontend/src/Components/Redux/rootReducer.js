import {combineReducers} from 'redux'
import authReducer from './Authentication/AuthReducer'


export default combineReducers({
    auth:authReducer
})