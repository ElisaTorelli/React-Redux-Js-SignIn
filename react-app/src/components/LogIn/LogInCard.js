import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../LogIn/login.module.css'
import { checkUserRegistreted, getUser } from '../../redux/login/logInActions'


import { Link } from 'react-router-dom'



const LogInCard = () => {
    // set field's state
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')

    // React-redux Hooks
    // const usersLogin = useSelector((state) => state.users)
    const dispatch = useDispatch()



    const handleEmailChange = (event) =>{
        setEmailState(event?.target?.value)
        console.log('ok email')
    }

    const handlePasswordChange = (event) =>{
        setPasswordState(event?.target?.value)
        console.log('ok password')
    }


    // let checkLoginUsers = usersLogin.find(
    //     (element) => 
    //     element.email === emailState && 
    //     element.password === passwordState
    // )
    // console.log(usersLogin)


    const handleLogIn = () => {
        // if(checkLoginUsers){
                dispatch(
                    checkUserRegistreted({
                        email: emailState,
                        password: passwordState
                    })
                )
        // }else{
        //     console.log('Non puoi entrare')
        // }
    }


    // send getUser action --> it select users array & push it in [users]
    useEffect (()=>{
        dispatch(getUser())
    },[])



    return (
        <div className={styles.signInCardContainer}>
            <h3>Insert your credentials to log-in:</h3>
            <div className={styles.inputContainer}>
                <input className={styles.emailInput} type='email' placeholder='email..' onChange={handleEmailChange} />
                <input required minLength={8} title="Password must contain one number, one uppercase and lowercase letter & at least 8  characters" className={styles.passwordInput} type='password' placeholder='password..' onChange={handlePasswordChange} />
                <Link to='/todo' title="redirect"><button type='button' onClick={handleLogIn}>Log In</button></Link>
            </div>
        </div>
    )
}

export default LogInCard