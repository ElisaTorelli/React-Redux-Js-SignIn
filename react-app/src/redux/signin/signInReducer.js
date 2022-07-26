import usersArray from "../usersArray"
import { SET_USER, USERS_ARRAY_RESULT  } from "./signInTypes"


const initialState = {
    user: usersArray,
    signIn: false
}


const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                usersArray: [...state.usersArray, action.payload],
                signIn: true
            }
        case USERS_ARRAY_RESULT:
            return{
                ...state,
                user: action.payload
            }
        default: return state
    }
}

export default signInReducer


