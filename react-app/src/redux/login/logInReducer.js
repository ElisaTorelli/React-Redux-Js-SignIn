import { SET_EMAIL, SET_PASSWORD, SET_USER_LOG_IN  } from "./logInTypes"


const initialState = {
    usersArray: [
        {
            name: 'Marika',
            surname: 'Morittu',
            email: "marika@gmail.com",
            password:"ciaoMarika@!12"
        },
        {
            name: 'Elisa',
            surname: 'Torelli',
            email:"elisa@gmail.com",
            password:"ciaoElisa@!12"
        }
    ], userLogged: false
}


const logInReducer = (state= initialState, action) => {
    switch(action.type){
        case SET_EMAIL:
            return{
                ...state,
                email: state.usersArray.includes(action.email)
            }
        case SET_PASSWORD:
            return{
                ...state,
                password: state.usersArray.includes(action.password)
            }
        case SET_USER_LOG_IN:
            return{
                ...state,
                userLogged: true
            }
        default: return state
    }
}


export default logInReducer