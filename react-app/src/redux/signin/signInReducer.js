import usersArray from "../usersArray"
import { SET_USER} from "./signInTypes"


const initialState = {
    usersArray
}


const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                usersArray: [...state.usersArray, action.payload],
            }
        default: return state
    }
}

export default signInReducer


