import React from 'react';
import './Dashboard.css';
import logo from './../../logo.png';

const Dashboard = () => {
  return (
    <>
      <header>
        <div className="header-img">
          <img src={logo}></img>
        </div>
        <div className="header-right">
          <img src=''></img>
          <div className="header-righ-info">
            <span>Sujina Maharjan</span>
            <span>suzeena.mhrjn@gmail.com</span>
          </div>
          <div className="header-right-icon">
            <span>p</span>
            <span>p</span>
          </div>
        </div>
      </header>
      <hr/>
      <footer>
        <span>Copyright 2022, SplitEx</span>
      </footer>
    </>
  );
};
export default Dashboard;