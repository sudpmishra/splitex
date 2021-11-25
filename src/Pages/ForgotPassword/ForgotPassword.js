import React, { useState } from 'react';
import './ForgotPassword.css';
import logo from './../../logo.png'
import { useNavigate, useSearchParams } from 'react-router-dom';
import http from '../../Utils/http';

const ForgotPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const _changePassword = () => {
    http.post("api/auth/reset-password", {
      password,
      token: searchParams.get('token')
    })
      .then(() => {
        alert("Password changed successfully");
        navigate('/login');
      })
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="title"><img src={logo} alt='Logo' /></div>
        <div className="login-access">
          <div className="fixed-height">
            <div className="flex-box">
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            </div>
          </div>
          <button className="login-btn mb-20" onClick={() => _changePassword()} >CHANGE PASSWORD</button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;