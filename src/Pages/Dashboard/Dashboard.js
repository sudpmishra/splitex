import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import logo from './../../logo.png';
import Modal from '../../Components/Modal/Modal';
import DashboardFeed from '../../Components/DashboardFeed/DashboardFeed';
import FriendList from '../../Components/FriendList/FriendList';
import jwtDecode from 'jwt-decode';
import Inputs from '../../Components/Inputs/Inputs';
import ExpenseModalBody from '../../Components/ExpenseModalBody/ExpenseModalBody';
import ModalBody from '../../Components/ModalBody/ModalBody';
import SettleUp from '../../Components/SettleUp/SettleUp';
import UserService from '../../Services/UserService';

let userData = localStorage.getItem('user_auth_token');
try {
  userData = jwtDecode(userData).user
}
catch (err) {
  userData = null
}


const Dashboard = () => {
  const [slider, setSlider] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseModalType, setExpenseModalType] = useState('ADD');
  const [settleUpSlider, setSettleUpSlider] = useState(false);
  const [settleUp, setSettleUp] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const _openExpenseModal = (type) => {
    setExpenseModalType(type)
    setShowExpenseModal(true)
  }
  const _showNotification = () => {
    alert("TODO show notification")
  }
  const _logout = () => {
    alert("logout")
    UserService.logout()
  }

  return (
    <>
      <header>
        <div className='header'>
          <div className="header-img">
            <img src={logo}></img>
          </div>
          <div className="header-right">
            <img src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'></img>
            <div className="header-righ-info">
              {userData &&
                <>
                  <span>{userData.name}</span>
                  <span>{userData.username}</span>
                </>}
            </div>
            <div className="header-right-icon">
              <button className='btn btn-circular header-btn ml-10' onClick={_showNotification}><i className="fas fa-bell"></i></button>
              <button className='btn btn-circular header-btn ml-10' onClick={_logout}><i className="fas fa-sign-out-alt"></i></button>
            </div>
          </div>
        </div>
        <hr />
      </header>
      <div className="content">
        <div className="row">
          <div className="col-8">
            <DashboardFeed
              setSlider={setSlider}
              setShowAddExpenseModal={() => _openExpenseModal('ADD')}
              setShowEditExpenseModal={() => _openExpenseModal('EDIT')}
              setShowViewExpenseModal={() => _openExpenseModal('VIEW')}
              setShowSettleUpModal={() => setSettleUp(true)}
              setSettleUpSlider={setSettleUpSlider} />
          </div>
          <div className="col-4">
            <FriendList />
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
      <Modal
        showSlider={showExpenseModal}
        setShowSlider={setShowExpenseModal}
        title='ADD NEW EXPENSE'
        loading={false}
        body={<ExpenseModalBody />}
        footer={<FooterExpenseModal />} />
      <Modal
        showSlider={settleUp}
        setShowSlider={setSettleUp}
        title='SETTLE UP'
        loading={false}
        body={<SettleUp />}
        footer={<FooterSettleUp />} />
        <Modal
        showSlider={notifications}
        setShowSlider={setNotifications}
        title='SETTLE UP'
        loading={false}
        body={<SettleUp />}
        footer={<FooterSettleUp />} />
      <footer>
        <span>Copyright 2022, SplitEx</span>
      </footer>
    </>
  );
};


const FooterExpenseModal = () => {
  return (
    <div className='footer'>
      <button className='footer-cancel'><i className="fas fa-trash"></i> Cancel</button>
      <button className='footer-save'><i className="fas fa-save"></i> Save</button>
    </div>
  )
}

const FooterSettleUp = () => {
  return (
    <div className='footer'>
      <button className='footer-cancel'><i className="fa fa-times" aria-hidden="true"></i> Cancel</button>
      <button className='footer-save'><i className="fas fa-handshake"></i> Save</button>
    </div>
  )
}
export default Dashboard;