import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_USER } from '../../redux/signin/signInTypes'



function SignInCard() {
    // set field's state
    const [nameState, setName] = useState('')
    const [surnameState, setSurname] = useState('')
    const [emailState, setEmail] = useState('')
    const [passwordState, setPassword] = useState('')



    const usersArray = useSelector( state => state.usersArray)
    const dispatch = useDispatch()

    //functions to change initial value state
    const handleNameChange = (event) =>{
        setName(event?.target?.value)
    }

    const handleSurnameChange = (event) =>{
        setSurname(event?.target?.value)
    }

    const handleEmailChange = (event) =>{
        setEmail(event?.target?.value)
    }

    const handlePasswordChange = (event) =>{
        setPassword(event?.target?.value)
    }


    const handleSignIn = () => {
        // check if users's info are in array or not
        let userCheck = usersArray.find(
            (element) => 
            element.name === usersArray.name && 
            element.surname === usersArray.surname &&
            element.email === usersArray.email && 
            element.password === usersArray.password
            ) 
        if(!userCheck){
            console.log('PUOI REGISTRARTI')
            dispatch({
                type: SET_USER,
                payload: {
                    name: nameState,
                    surname: surnameState,
                    email: emailState,
                    password: passwordState
                }
            })
        }else{
            console.log('NON PUOI')
        }
        console.log(usersArray)
    }


    // useEffect(() => {
    //     console.log(usersArray)
    // })


return (
    <div>
        <input type='text' placeholder='name..' onChange={handleNameChange}/>
        <input type='text' placeholder='surname..' onChange={handleSurnameChange}/>
        <input type='email' placeholder='email..' onChange={handleEmailChange}/>
        <input type='password' placeholder='password..' onChange={handlePasswordChange}/>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
)
}

export default SignInCard