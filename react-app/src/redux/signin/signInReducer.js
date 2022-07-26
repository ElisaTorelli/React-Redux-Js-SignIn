import { SET_USER  } from "./signInTypes"


const initialState ={
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
    ],
    signIn: false
}

const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                usersArray: [...state.usersArray, action.payload],
                signIn: true
            }
        default: return state
    }
}

export default signInReducer


