import React, { useState } from 'react';
import './Dashboard.css';
import logo from './../../logo.png';
import Modal from '../../Components/Modal/Modal';
import DashboardFeed from '../../Components/DashboardFeed/DashboardFeed';
import FriendList from '../../Components/FriendList/FriendList';

const Dashboard = () => {
  const [slider, setSlider] = useState(false);
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
            <DashboardFeed setSlider={setSlider}/>
          </div>
          <div className="col-4">
            <FriendList/>
          </div>
        </div>
      </div>
      <Modal
        showSlider={slider}
        setShowSlider={setSlider}
        title='Drink Bill Split'
        subTitle='1/27/2022'
        loading={false}
        body={<ModalBody />}
        size='small' />
      <footer>
        <span>Copyright 2022, SplitEx</span>
      </footer>
    </>
  );
};


const ModalBody = () => {
  return (
    <div className="bill-image">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR5QNTgExD351P1uVI-t_SUtr_0cUVPikdA&usqp=CAU'></img>
    </div>
  )
}
export default Dashboard;