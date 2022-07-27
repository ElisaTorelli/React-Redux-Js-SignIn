// import { SET_EMAIL, SET_NAME, SET_PASSWORD, SET_SURNAME, SET_USER  } from "./signInTypes"
import { SET_USER } from "./signInTypes"



// export const setName = (name = '') => {
//     return{
//         type: SET_NAME,
//         payload: name
//     }
// }

// export const setSurname = (surname = '') => {
//     return{
//         type: SET_SURNAME,
//         payload: surname
//     }
// }

// export const setEmail = (email = '') => {
//     return{
//         type: SET_EMAIL,
//         payload: email
//     }
// }

// export const setPassword = (password = '') => {
//     return{
//         type: SET_PASSWORD,
//         payload: password
//     }
// }

export const setUser = (user = [{}]) => {
    return{
        type: SET_USER,
        payload: user 
    }
}
