import {GET_USERS, CHECK_USER_REGISTRETED, SET_IS_BUTTON_DISABLED, SET_IS_BUTTON_IS_ABLED, ERROR_MESSAGE} from './logInTypes'


//  create initial state
const initialState = {
    users: [],
    check:false,
    isButtonDisabled:true,
    isButtunIsAbled:false
}


const logInReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_USER_REGISTRETED:
            return{
                // set check true
                ...state,
                check: action.payload
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
        case GET_USERS:
            return{
                ...state,
                // push usersArray in [users]
                users: [...action.payload],
            }
        default: return state
    }
}

export default logInReducer