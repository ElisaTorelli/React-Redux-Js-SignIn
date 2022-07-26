import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {SET_USER_LOG_IN} from '../../redux/login/logInTypes'
import styles from '../LogIn/login.module.css'



const LogInCard = () => {

    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [userLoggedState, setUserLoggedState] = useState(false)
    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        setEmailState(e?.target?.value)
    }


    const handlePasswordChange = (e) => {
        setPasswordState(e?.target?.value)
    }


    const handleLogIn = () => {
        dispatch({
            type: SET_USER_LOG_IN,
            payload: setUserLoggedState(true)
        })
    }


    return (
        <div className={styles.logInCardContainer}>
            <h3>Insert your credentials to log-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                <button type='button' onClick={handleLogIn} >Log In</button>
            </div>
        </div>
    )
}

export default LogInCard