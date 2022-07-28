import { GET_USERS, SET_USER, SET_IS_BUTTON_DISABLED, SET_IS_BUTTON_IS_ABLED, SET_IS_ERROR} from "./signInTypes"


// set initial state
const initialState = {
    users: [],
    isButtonDisabled: true,
    isButtunIsAbled:false,
    // isError: ''
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
        case SET_IS_BUTTON_IS_ABLED:
            return{
                ...state,
                isButtonIsabled: action.payload
            }
        // case SET_IS_ERROR:
        //     return{
        //         ...state,
        //         // push into isError variable
        //         isError: [...action.payload]
        //     }
        default: return state
    }
}

export default signInReducer
