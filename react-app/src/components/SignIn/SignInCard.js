import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_USER } from '../../redux/signin/signInTypes'
import styles from '../SignIn/signin.module.css'



function SignInCard() {
    // set field's state
    const [nameState, setNameState] = useState('')
    const [surnameState, setSurnameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-Redux Hooks
    const usersArray = useSelector( state => state.usersArray)
    const dispatch = useDispatch()



    // check if email & password are valid
    const validEmail = (email) =>{
        return /\S+@\S+\.\S+/.test(email);
    }
    const validPassword = (password) => {
        return password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{8,}$/)
    };



    //functions to change initial value state for each input form
    const handleNameChange = (event) =>{
        setNameState(event?.target?.value)
    }

    const handleSurnameChange = (event) =>{
        setSurnameState(event?.target?.value)
    }


    const handleEmailChange = (event) =>{
        if(!validEmail(event?.target?.value)){
            console.log('password NO')
        }else{
            console.log('password SI')
            setEmailState(event?.target?.value)
        }
    }

    const handlePasswordChange = (event) =>{
        if(!validPassword(event.target.value)){
            console.log('password NO')
        }else{
            console.log('password SI')
            setPasswordState(event?.target?.value)
        }
    }


    // set condition to check if user is in array
    let userIsPresentInArray = usersArray.find(
        (element) => 
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
        <div className={styles.SignIncardContainer}>
            <input className={styles.nameInput} type='text' placeholder='name..' onChange={handleNameChange}/>
            <input className={styles.surnameInput} type='text' placeholder='surname..' onChange={handleSurnameChange}/>
            <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange}/>
            <input required minLength={8} title="Password must contain at least one number, one uppercase and lowercase letter and  at least 8 characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange}/>
            <div>
                <button type='button' onClick=  {handleSignIn}>Sign In</button>
            </div>
        </div>
    )
}

export default SignInCard