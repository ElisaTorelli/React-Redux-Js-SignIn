import { SET_EMAIL, SET_NAME, SET_PASSWORD, SET_SURNAME, SET_USER_SIGN_IN } from "./signInTypes"



export const setName = (name = '') => {
    return{
        type: SET_NAME,
        payload: name
    }
}

export const setSurname = (surname = '') => {
    return{
        type: SET_SURNAME,
        payload: surname
    }
}

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


export const setUserSignIn = (signIn = false) => {
    return{
        type: SET_USER_SIGN_IN,
        payload: signIn
    }
}