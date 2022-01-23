import React from 'react'
import {NavLink} from 'react-router-dom'
const Error404 = () => {
    return (
        <div className='container'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <NavLink className='nav-link' to="/">HOME</NavLink>
        </div>
    )
}

export default Error404;