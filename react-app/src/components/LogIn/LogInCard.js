import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../LogIn/login.module.css'
import { checkUserRegistreted, getUser } from '../../redux/login/logInActions'


const LogInCard = () => {
    // set field's state
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-redux Hooks
    const users = useSelector((state) => state.login.users)
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


    // log-in function
    const handleLogIn = () => {
        if(checkLoginUsers()){
            dispatch(
                checkUserRegistreted()
            )
            console.log('Sei entrato !')
        }else{
            console.log('Non puoi entrare')
        }
    }


    // send getUser action --> it select users array & push it in [users]
    useEffect (()=>{
        dispatch(getUser())
    },[])



    return (
        <div className={styles.logInCardContainer}>
            <h3>Insert your credentials to log-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                <button type='button' onClick={handleLogIn}>Log In</button>
            </div>
        </div>
    )
}

export default LogInCard