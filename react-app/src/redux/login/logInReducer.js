import {GET_USERS, CHECK_USER_REGISTRETED} from './logInTypes'



const initialState = {
    users: []
}


const logInReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_USER_REGISTRETED:
            return{
                ...state,
                users: state.users.includes(action.user)
            }
        case GET_USERS:
            return{
                ...state,
                // push usersArray in [users]
                users: [...state.users, ...action.payload],
            }
        default: return state
    }
}

export default logInReducer