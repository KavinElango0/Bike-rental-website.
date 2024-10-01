import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="UNDERLINE"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src=" " alt=""/>
                <input type="text"/>
            </div>
            <div className="input">
                <img src=" " alt=""/>
                <input type="Gmail"/>
            </div>
            <div className="input">
                <img src=" " alt=""/>
                <input type="password"/>
            </div>
        </div>
        
    </div>
  )
}

