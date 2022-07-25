import React, { useState, useSelector } from 'react'
import { connect } from 'react-redux'
import {setEmail, setPassword} from 'redux'
import { SET_EMAIL, SET_PASSWORD } from '../../redux/signin/signInTypes'



function SignInCard() {
    // set field's state
    const [nameState, setName] = useState('')
    const [surnameState, setSurname] = useState('')
    const [emailState, setEmail] = useState('')
    const [passwordState, setPassword] = useState('')



    const usersArray = useSelector( state => {
        state.usersArray
    })
    

    // const mapDispatchToProps = (dispatch, ownProp) => {
    //     let userCheck = usersArray.find((element) => element.email !== usersArray.email && element.password !== usersArray.password) 
    //     if(userCheck){
    //         return {
    //             console.log(usersArray)
    //         }
    //     }else{
    //         console.log('non puoi registrarti')
    //     }
    //     const dispatchFunction = ownProp.email
    //     ? () => dispatch (setEmail)
    //     : () => dispatch (setPassword)
    //     return{
    //         userInfo: dispatchFunction()
    //     }
    // }



    const handleNameChange = (event) =>{
        setName({
            ...nameState,
            name: event.nameState.name
                
        })
    }
    

    const handleSurnameChange = (event) =>{
        setSurname({
            ...surnameState,
            surname: event.surnameState.surname
            
        })
    }


    const handleEmailChange = (event) =>{
        setEmail({
            ...emailState,
            email: event.emailState.email
            
        })
    }

    const handlePasswordChange = (event) =>{
        setPassword({
            ...passwordState,
            password: event.passwordState.password
            
        })
    }


    const handleSignIn = () => {
        // check if users's info are in array or not
        let userCheck = usersArray.find((element) => element.email !== usersArray.email && element.password !== usersArray.password) 
        if(userCheck){
            // user not sign up
        }
    }


    // const mapStateToProps = (state, ownProp) => {
    //     const userState = ownProp.email
    //     ? state.emailState.email
    //     : state.passwordState.password
    //     return{
    //         user: userState
    //     }
    // }



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

export default connect(
    // mapStateToProps, 
    // mapDispatchToProps
) (SignInCard)