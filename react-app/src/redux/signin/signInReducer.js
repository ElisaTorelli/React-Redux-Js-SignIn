import { GET_USERS, SET_USER} from "./signInTypes"


const initialState = {
    users: []
}


const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                users: [...state.users, action.payload],
            }
        case GET_USERS:
            return{
                ...state,
                users: [...state.users, ...action.payload],
            }
        
        default: return state
    }
}

export default signInReducer


