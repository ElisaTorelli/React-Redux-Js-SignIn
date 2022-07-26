import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_USER } from '../../redux/signin/signInTypes'



function SignInCard() {
    // set field's state
    const [nameState, setNameState] = useState('')
    const [surnameState, setSurnameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-Redux Hooks
    const usersArray = useSelector( state => state.usersArray)
    const dispatch = useDispatch()


    //functions to change initial value state for each input form
    const handleNameChange = (event) =>{
        setNameState(event?.target?.value)
    }

    const handleSurnameChange = (event) =>{
        setSurnameState(event?.target?.value)
    }

    const handleEmailChange = (event) =>{
        setEmailState(event?.target?.value)
    }

    const handlePasswordChange = (event) =>{
        setPasswordState(event?.target?.value)
    }


    // set condition to check if user is in array
    let userIsPresentInArray = usersArray.find(
        (element) => 
        element.name === nameState && 
        element.surname === surnameState &&
        element.email === emailState && 
        element.password === passwordState
        )


    // sign-in function
    const handleSignIn = () => {
        // check if 'userIsPresentInArray' is true / false
        if(!userIsPresentInArray){
            dispatch({
                type: SET_USER,
                payload: {
                    name: nameState,
                    surname: surnameState,
                    email: emailState,
                    password: passwordState
                }
            })
            console.log(usersArray)
        }
    }


    return (
        <div>
            <input type='text' placeholder='name..' onChange={handleNameChange}/>
            <input type='text' placeholder='surname..' onChange={handleSurnameChange}/>
            <input type='email' placeholder='email..' onChange={handleEmailChange}/>
            <input type='password' placeholder='password..' onChange={handlePasswordChange}/>
            <button type='button' onClick={handleSignIn}>Sign In</button>
        </div>
    )
}

export default SignInCard