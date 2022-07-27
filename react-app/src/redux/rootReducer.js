import { combineReducers } from "redux";
import logInReducer from "./login/logInReducer";
import signInReducer from "./signin/signInReducer";


const rootReducer = combineReducers({signin: signInReducer, login: logInReducer})


export default rootReducer