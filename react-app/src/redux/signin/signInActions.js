import { GET_USERS, SET_USER, SET_IS_BUTTON_DISABLED, SET_IS_BUTTON_IS_ABLED } from "./signInTypes"
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

export const setIsButtonDisabled = () => {
    return{
        type: SET_IS_BUTTON_DISABLED,
        payload: false
    }
}

export const setIsButtonIsAbled = () => {
    return{
        type: SET_IS_BUTTON_IS_ABLED,
        payload: true
    }
}
