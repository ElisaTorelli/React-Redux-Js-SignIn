import { SET_EMAIL, SET_PASSWORD } from "./signInTypes"




const initialState ={
    usersArray: [
        {
            email: "marika@gmail.com",
            password:"ciaoMarika@!12"
        },
        {
            email:"elisa@gmail.com",
            password:"ciaoElisa@!12"
        }
    ]
}

const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL: 
            return{
            ...state,
            email: state.usersArray.push(action.email)
        }
        case SET_PASSWORD:
            return{
                ...state,
                password: state.usersArray.push(action.password)
            }
        default: return state
    }
}

export default signInReducer


