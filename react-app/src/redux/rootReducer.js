import { combineReducers } from "redux";
import signInReducer from './signin/signInReducer'
import logInReducer from './login/logInReducer'


const rootReducer = combineReducers({signIn: signInReducer, logIn: logInReducer})



export default rootReducer