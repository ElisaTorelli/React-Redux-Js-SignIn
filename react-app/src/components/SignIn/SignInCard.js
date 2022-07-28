import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setIsButtonIsAbled, setUser, setIsButtonDisabled } from '../../redux/signin/signInActions'
import styles from '../SignIn/signin.module.css'

import {Link} from 'react-router-dom'
import ToDo from '../../pages/ToDo'



function SignInCard() {

    // set field's state
    const [nameState, setNameState] = useState('')
    const [surnameState, setSurnameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorMessageState, setErrorMessageState] = useState('')



    // React-Redux Hooks
    const users = useSelector(store => store.signin.users)
    const button= useSelector((state)=> state.signin.isButtonDisabled)
    const dispatch = useDispatch()


    // disable SignIn btn
    useEffect(() => {
        if(nameState?.trim() && surnameState?.trim() && emailState.trim() && passwordState.trim()){
            dispatch(setIsButtonDisabled())
        }else{
            dispatch(setIsButtonIsAbled())
        }
    }, [emailState, passwordState])


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


    // function to set error message
    // useEffect ((e) => {
    //     if(!validPassword(e.target.value)){
    //         setErrorState('Password sbagliata!')
    //     }else if(!validEmail(e.target.value)){
    //         setErrorState('Email sbagliata!')
    //     }
    // }, [])




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
            // dispatch action and create new user
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
            console.log(users)
        }
        // else{
        //     setErrorMessageState('Email not valid')
        // }
    }


    // send getUser action --> it select users array & push it in [users]
    useEffect (()=>{
        dispatch(getUser())
    },[])



    //make btn available after validations
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            button || handleSignIn()
        }
    }


    // function to dispatch error action
    // const dispatchError = () => {
    //     dispatch(
    //         setIsError(errorState)
    //     )
    //     console.log(errorState)
    // }


    //function to display error message
    // const displayErrorMessage = () => {
    //     setErrorMessageState('Email not valid');
    // } 



    return (
        <div className={styles.signInCardContainer}>
            <h3>Insert your credentials to sign-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.nameInput} required maxLength={12} type='text' placeholder='name..' onChange={handleNameChange} onKeyPress={handleKeyPress}/>
                <input className={styles.surnameInput} required maxLength={12} type='text' placeholder='surname..' onChange={handleSurnameChange} onKeyPress={handleKeyPress} />
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} onKeyPress={handleKeyPress}/>
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} onKeyPress={handleKeyPress} />
                {/* {handleSignIn && (
                    <p className={styles.errorMessage}>{errorMessageState}</p>
                )} */}
                <Link to='/todo' title="redirect"><button type='button' onClick={ (handleSignIn) } disabled={button}>Sign In</button></Link>
            </div>
        </div>
    )
}

export default SignInCard
