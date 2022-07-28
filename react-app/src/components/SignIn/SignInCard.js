import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setUser } from '../../redux/signin/signInActions'
import styles from '../SignIn/signin.module.css'


import {Link} from 'react-router-dom'
import { SET_IS_BUTTON_DISABLED } from '../../redux/signin/signInTypes'



function SignInCard() {

    // set field's state
    const [nameState, setNameState] = useState('')
    const [surnameState, setSurnameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-Redux Hooks
    const users = useSelector(store => store.signin.users)
    const dispatch = useDispatch()


    // disable SignIn btn
    // useEffect(() => {
    //     if(nameState?.trim() && surnameState?.trim() && emailState.trim() && passwordState.trim()){
    //         dispatch({
    //             type: SET_IS_BUTTON_DISABLED,
    //             payload: false
    //         })
    //     }else{
    //         dispatch({
    //             type: SET_IS_BUTTON_DISABLED,
    //             payload: true
    //         })
    //     }
    // }, [emailState, passwordState])


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
    let userIsPresentInArray = () => users.find(
        (element) => 
        element.email === emailState && 
        element.password === passwordState
        )


    // sign-in function
    const handleSignIn = () => {
        // check if 'userIsPresentInArray' is true / false
        if(!userIsPresentInArray()){
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
        console.log(users)
    }


    // send getUser action --> it select users array & push it in [users]
    useEffect (()=>{
        dispatch(getUser())
    },[])
    

    /*useEffect(()=>{
        console.log(users)
    },[users])*/



    //make btn available after validations
    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter'){
    //         passwordState.isButtonDisabled || handleSignIn()
    //     }
    // }


    const validateEmail = emailState => typeof emailState === 'string' && validEmail(true)
    const validatePassword = passwordState => typeof passwordState === 'string' && validPassword(true)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(() => {
        setIsButtonDisabled(!validateEmail(emailState))
    })


    return (
        <div className={styles.signInCardContainer}>
            <h3>Insert your credentials to sign-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.nameInput} type='text' placeholder='name..' onChange={handleNameChange} />
                <input className={styles.surnameInput} type='text' placeholder='surname..' onChange={handleSurnameChange} />
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                <Link to='/todo' title="redirect"><button type='button' onClick={handleSignIn} disabled={isButtonDisabled}>Sign In</button></Link>
            </div>
        </div>
    )
}

export default SignInCard
