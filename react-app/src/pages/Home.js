import React from 'react'

import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home page</h1>
            <Link to='/signin' title="redirect"><button type='button' >Sign In</button></Link>
            <Link to='/login'  title="redirect"><button type='button' >Log In</button></Link>
        </div>
    )
}

export default Home