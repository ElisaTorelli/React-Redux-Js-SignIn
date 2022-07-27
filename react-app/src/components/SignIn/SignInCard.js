import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setUser } from '../../redux/signin/signInActions'
import { GET_USERS, SET_USER } from '../../redux/signin/signInTypes'
import usersArray from '../../redux/usersArray'
import styles from '../SignIn/signin.module.css'


function SignInCard() {
    // set field's state
    const [nameState, setNameState] = useState('')
    const [surnameState, setSurnameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-Redux Hooks
    const users = useSelector(state => state.users)
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
            console.log('email NO')
        }else{
            console.log('email SI')
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
    let userIsPresentInArray = users.find(
        (element) => 
        element.email === emailState && 
        element.password === passwordState
        )


    // sign-in function
    const handleSignIn = () => {
        // check if 'userIsPresentInArray' is true / false
        if(!userIsPresentInArray){
            dispatch( setUser({
                    name: nameState,
                    surname: surnameState,
                    email: emailState,
                    password: passwordState
                })
            //     {
            //     type: SET_USER,
            //     payload: {
            //         name: nameState,
            //         surname: surnameState,
            //         email: emailState,
            //         password: passwordState
            //     }
            // }
            )
        }
    }


    useEffect (()=>{
        dispatch(getUser())
    },[])
    

    // useEffect(()=>{
    //     console.log(users)
    // },[users])


    return (
        <div className={styles.signInCardContainer}>
            <h3>Insert your credentials to sign-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.nameInput} type='text' placeholder='name..' onChange={handleNameChange} />
                <input className={styles.surnameInput} type='text' placeholder='surname..' onChange={handleSurnameChange} />
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                <button type='button' onClick={handleSignIn} >Sign In</button>
            </div>
        </div>
    )
}

export default SignInCard