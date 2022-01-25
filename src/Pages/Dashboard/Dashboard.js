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
            <span className='ml-10'><i class="fas fa-bell"></i></span>
            <span className='ml-10'><i class="fas fa-sign-out-alt"></i></span>
          </div>
        </div>
      </header>
      <hr />
      <div className="content">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 btn-strip">
                <div className="btn-left">
                  <button className="btn btn-primary"><i class="fas fa-home"></i> <span className='ml-10'>Home</span></button>
                  <button className="btn btn-circular btn-secondary ml-10"><i class="fas fa-receipt"></i></button>
                  <button className="btn btn-circular btn-secondary ml-10"><i class="fas fa-history"></i></button>
                  <button className="btn btn-circular btn-secondary ml-10"><i class="fas fa-chart-line"></i></button>
                </div>
                <div className="btn-right">
                  <button className="btn btn-circular btn-primary ml-10"><i class="fas fa-plus-circle"></i></button>
                  <button className="btn btn-circular btn-primary ml-10"><i class="fas fa-handshake"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <div className="btn-right">
                  <button className="btn btn-circular btn-success ml-10"><i class="fas fa-user-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <span>Copyright 2022, SplitEx</span>
      </footer>
    </>
  );
};
export default Dashboard;