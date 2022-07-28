import {GET_USERS, CHECK_USER_REGISTRETED} from './logInTypes'


//  create initial state
const initialState = {
    users: [],
    check:false
}


const logInReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_USER_REGISTRETED:
            return{
                // set check true
                ...state,
                check: action.payload
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