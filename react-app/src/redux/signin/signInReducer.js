import { GET_USERS, SET_USER, SET_IS_BUTTON_DISABLED} from "./signInTypes"


// set initial state
const initialState = {
    users: [],
    isButtonDisabled: true
}


const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                // add new users in [users]
                users: [...state.users, action.payload],
            }
        case GET_USERS:
            return{
                ...state,
                // push usersArray in [users]
                users: [...action.payload],
            }
        case SET_IS_BUTTON_DISABLED:
            return{
                ...state,
                isButtonDisabled: action.payload
            }
        default: return state
    }
}

export default signInReducer
