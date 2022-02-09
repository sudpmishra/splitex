import React, { useState } from 'react'
import UserService from '../../Services/UserService'
import http from '../../Utils/http'
import "./Login.css"
import logo from './../../logo.png'

const INITIAL_MESSAGE = "**Please enter email address associated with your account to receive email with instruction on how to reset your password."
export default function Login() {
    const [email, setEmail] = useState("")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [userName, setUserName] = useState("")
    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const [password, setpassword] = useState("")
    const changepassword = (e) => {
        setpassword(e.target.value)
    }
    const [formType, setFormType] = useState("LOGIN")
    const [message, setMessage] = useState(INITIAL_MESSAGE)
    const _login = () => {
        UserService.login({
            email,
            password
        })
    }
    const _register = () => {
        http.post("api/auth/register", {
            "name": userName,
            "password": password,
            "username": email
        })
            .then(() => {
                setFormType("LOGIN")
            })
    }
    const _send_email = () => {
        http.post("api/auth/forgot-password", {
            "email": email
        })
            .then(() => {
                setMessage("An email has been sent to you with instructions to reset your password")
            }).catch((err) => {
                setMessage(err.response.data.message)
            })
    }

    const _setLoginValue = (type) => {
        setFormType(type)
        setMessage(INITIAL_MESSAGE)
        setEmail("")
        setUserName("")
        setpassword("")
    }
    return (
        <div className='login-page'>
            <div className="login-container">
                <div className="title"><img src={logo} alt='Logo' /></div>
                <div className="login-access">
                    <div className="fixed-height">
                        <div className={`flex-box login ${formType === "LOGIN" ? 'show' : ''}`}>
                            <input type="text" placeholder='Email' value={email} tabIndex="0" onChange={changeEmail} />
                            <input type="password" placeholder='Password' value={password} tabIndex="1" onChange={changepassword} />
                        </div>
                        <div className={`flex-box register ${formType === "REGISTER" ? 'show' : ''}`}>
                            <input type="text" placeholder='Full Name' tabindex={formType !== "REGISTER" ? -1 : 0} value={userName} onChange={changeUserName} />
                            <input type="text" placeholder='Email' tabindex={formType !== "REGISTER" ? -1 : 1} value={email} onChange={changeEmail} />
                            <input type="password" placeholder='Password' tabindex={formType !== "REGISTER" ? -1 : 2} value={password} onChange={changepassword} />
                        </div>
                        <div className={`flex-box forgot ${formType === "FORGOT_PASSWORD" ? 'show' : ''}`}>
                            <input type="text" placeholder='Email' tabindex={formType !== "FORGOT_PASSWORD" ? -1 : 0} value={email} onChange={changeEmail} />
                            <span className='no-account forgot-password-info'>{message}</span>
                        </div>
                    </div>
                    {formType === "LOGIN" &&
                        <>
                            <button className="login-btn" onClick={_login} tabIndex="2">LOGIN</button>
                            <span className='forgot-password' onClick={() => setFormType("FORGOT_PASSWORD")} tabIndex="3">Forgot Password?</span>
                            <span className='no-account'>Dont have an account? <span className='sign-up' tabIndex="4" onClick={() => _setLoginValue("REGISTER")}>Sign Up</span></span>
                        </>
                    }
                    {formType === "REGISTER" &&
                        <>
                            <button className="login-btn" onClick={_register} tabIndex="3">REGISTER</button>
                            <span className='no-account signup-padding'>Already have an account? <span className='sign-up' tabIndex="4" onClick={() => _setLoginValue("LOGIN")}>Sign In</span></span>
                        </>
                    }
                    {formType === "FORGOT_PASSWORD" &&
                        <>
                            <button className="login-btn" onClick={_send_email} tabIndex="1" >SEND EMAIL</button>
                            <span className='no-account signup-padding'>Already have an account? <span className='sign-up' tabIndex="2" onClick={() => _setLoginValue("LOGIN")}>Sign In</span></span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
