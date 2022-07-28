import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../LogIn/login.module.css'
import { checkUserRegistreted, getUser, setIsButtonDisabled, setIsButtonIsabled } from '../../redux/login/logInActions'


import { Link } from 'react-router-dom'
import ToDo from '../../pages/ToDo'



const LogInCard = () => {
    // set field's state
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorMessageState, setErrorMessageState] = useState('')



    // React-redux Hooks
    const users = useSelector((state) => state.login.users)
    const button= useSelector((state)=> state.login.isButtonDisabled)
    const dispatch = useDispatch()



    //functions to change initial value state for each input form
    const handleEmailChange = (event) =>{
        setEmailState(event?.target?.value)
        console.log('ok email')
    }

    const handlePasswordChange = (event) =>{
        setPasswordState(event?.target?.value)
        console.log('ok password')
    }



    // set condition to check if user is in array
    let checkLoginUsers = () => users.find(
        (element) => 
        element.email === emailState && 
        element.password === passwordState
    )

        let errorEmail = () => users.find((e)=> e.email === emailState)
        let errorPassword = () => users.find((e)=> e.password === passwordState)



    // log-in function
    const handleLogIn = () => {
        if(checkLoginUsers()){
            dispatch(
                checkUserRegistreted(),
            )
            console.log('Sei entrato !')
        }else if(!errorEmail() && !errorPassword()) {
            setErrorMessageState('email e password sbagliate!')
            console.log('Non puoi entrare')
        }else if (!errorPassword()){
            setErrorMessageState('password sbagliata!')
        }else if(!errorEmail()){
            setErrorMessageState('email sbagliata!')
        }
    }



    // disabled button 
    useEffect(() => {
        if (emailState.trim() && passwordState.trim()) {
            dispatch(setIsButtonDisabled());
        } else {
            dispatch(setIsButtonIsabled());
        }
        }, [emailState, passwordState]);



    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            button || handleLogIn();
            }
        };



    // send getUser action --> it select users array & push it in [users]
    useEffect (()=>{
        dispatch(getUser())
    },[])



    return (
        <div className={styles.logInCardContainer}>
            <h3>Insert your credentials to log-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput} type='email' placeholder='email..' onKeyPress={handleKeyPress} onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" onKeyPress={handleKeyPress} className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                {/* {handleLogIn && (
                    <p className={styles.errorMessage}>{errorMessageState}</p>
                )} */}
                <div className={styles.error}>{errorMessageState}</div>
                {/* <Link to='/todo' title="redirect"> */}
                <button type='button' onClick={handleLogIn} disabled={button}>Log In</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default LogInCard