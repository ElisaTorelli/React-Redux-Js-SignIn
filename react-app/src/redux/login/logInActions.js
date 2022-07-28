import { CHECK_USER_REGISTRETED, GET_USERS, SET_IS_BUTTON_DISABLED,SET_IS_BUTTON_IS_ABLED, SET_IS_ERROR} from "./logInTypes"
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

export const setIsButtonDisabled = () => {
    return{
        type: SET_IS_BUTTON_DISABLED,
        payload: false
    }
}

export const setIsButtonIsabled = () => {
    return{
        type: SET_IS_BUTTON_IS_ABLED,
        payload: true
    }
}

export const setIsError = () => {
    return{
        type: SET_IS_ERROR,
        payload: true
    }
}
