import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import http from '../../Utils/http'
import "./Login.css"
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
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const login = () => {
        // navigate("/")
        http.post("login", {
            "name": email,
            "password": password
        })
            .then((res) => {
                localStorage.setItem("auth_token",res.accessToken)
                localStorage.setItem("refresh_token",res.refreshToken)
            })
    }
    return (
        <div className='login-page'>
            <div className="login-container">
                <h2 className="title">{isLogin ? "LOGIN" : "REGISTER"}</h2>
                <div className="login-access">
                    <div className="flex-box">
                        {!isLogin && <input type="text" placeholder='Full Name' value={userName} onChange={changeUserName} />}
                        <input type="text" placeholder='Email' value={email} onChange={changeEmail} />
                        <input type="password" placeholder='Password' value={password} onChange={changepassword} />
                    </div>
                    <button className="login-btn" onClick={login}>LOGIN</button>
                    <span className='forgot-password'>Forgot Password?</span>
                    {isLogin && <span className='no-account'>Dont have an account? <span className='sign-up' onClick={e => setIsLogin(false)}>Sign Up</span></span>}
                    {!isLogin && <span className='no-account'>Already have an account? <span className='sign-up' onClick={e => setIsLogin(true)}>Sign In</span></span>}
                </div>
            </div>
        </div>
    )
}
