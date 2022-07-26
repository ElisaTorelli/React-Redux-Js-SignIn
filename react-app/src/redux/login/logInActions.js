import {SET_EMAIL, SET_PASSWORD, SET_USER_LOG_IN } from './logInTypes'



export const setEmail = (email = '') => {
    return{
        type: SET_EMAIL,
        payload: email
    }
}


export const setPassword = (password = '') => {
    return{
        type: SET_PASSWORD,
        payload: password
    }
}


export const setUserLogIn = (userLogged) => {
    return{
        type: SET_USER_LOG_IN,
        payload: userLogged
    }
}