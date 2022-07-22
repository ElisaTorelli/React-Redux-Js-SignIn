import React, { useState } from 'react'




function SignInCard() {

    const [nameState, setName] = useState('')
    const [surnameState, setSurname] = useState('')
    const [emailState, setEmail] = useState('')
    const [passwordState, setPassword] = useState('')
    

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

    

  return (
    <div>
        <input type='text' placeholder='name..' onChange={handleNameChange}/>
        <input type='text' placeholder='surname..' onChange={handleSurnameChange}/>
        <input type='email' placeholder='email..' onChange={handleEmailChange}/>
        <input type='password' placeholder='password..' onChange={handlePasswordChange}/>
        <button>Sign In</button>
    </div>
  )
}

export default SignInCard
