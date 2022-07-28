import { CHECK_USER_REGISTRETED, GET_USERS } from "./logInTypes"
import usersArray from '../usersArray'



export const checkUserRegistreted = () => {
    return{
        type: CHECK_USER_REGISTRETED,
        payload: true
    }
}

// create action to push usersArray in [users]
export const getUser = () => {
    return{
        type: GET_USERS,
        payload: usersArray
    }
}
