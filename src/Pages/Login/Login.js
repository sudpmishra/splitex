import React, { useState } from 'react'
import { useNavigate } from 'react-router'
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
        navigate("/")
    }
    return (
        <div className='login-page'>
            <div className="login-container">
                <h2 className="title">{isLogin ? "LOGIN" : "REGISTER"}</h2>
                <div className="login-access">
                    {!isLogin && <input type="text" placeholder='Full Name' value={userName} onChange={changeUserName} />}
                    <input type="text" placeholder='Email' value={email} onChange={changeEmail} />
                    <input type="password" placeholder='Password' value={password} onChange={changepassword} />
                    <button className="login-btn" onClick={login}>LOGIN</button>
                    <a href="">Forgot Password?</a>
                    {isLogin && <button onClick={e => setIsLogin(false)}>Sign Up</button>}
                    {!isLogin && <button onClick={e => setIsLogin(true)}>Sign In</button>}
                </div>
            </div>
        </div>
    )
}
