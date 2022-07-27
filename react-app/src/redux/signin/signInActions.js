import { GET_USERS, SET_USER } from "./signInTypes"
import usersArray from '../usersArray'


// create action to add users
export const setUser = (user = {}) => {
    return{
        type: SET_USER,
        payload: user 
    }
}

// create action to push usersArray in [users]
export const getUser = () => {
    return{
        type: GET_USERS,
        payload: usersArray
    }
}
