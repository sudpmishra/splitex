import React, { useState } from 'react';
import './Dashboard.css';
import logo from './../../logo.png';
import Modal from '../../Components/Modal/Modal';
import DashboardFeed from '../../Components/DashboardFeed/DashboardFeed';
import FriendList from '../../Components/FriendList/FriendList';
import jwtDecode from 'jwt-decode';
import Inputs from '../../Components/Inputs/Inputs';
import userList from '../../MockData/friend.json';
import ExpenseModalBody from '../../Components/ExpenseModalBody/ExpenseModalBody';
import ModalBody from '../../Components/ModalBody/ModalBody';
import SettleUp from '../../Components/SettleUp/SettleUp';

// const userData = jwtDecode(localStorage.getItem('auth_token')).user;
const userData = { name: 'Sujina', username: "suzeena.mhrn@gmail.com" }
const Dashboard = () => {
  const [slider, setSlider] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseModalType, setExpenseModalType] = useState('ADD');
  const [settleUp, setSettleUp] = useState(false);
  const _openExpenseModal = (type) => {
    setExpenseModalType(type)
    setShowExpenseModal(true)
  }
  return (
    <>
      <header>
        <div className="header-img">
          <img src={logo}></img>
        </div>
        <div className="header-right">
          <img src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'></img>
          <div className="header-righ-info">
            <span>{userData.name}</span>
            <span>{userData.username}</span>
          </div>
          <div className="header-right-icon">
            <span className='ml-10'><i className="fas fa-bell"></i></span>
            <span className='ml-10'><i className="fas fa-sign-out-alt"></i></span>
          </div>
        </div>
      </header>
      <hr />
      <div className="content">
        <div className="row">
          <div className="col-8">
            <DashboardFeed
              setSlider={setSlider}
              setShowAddExpenseModal={() => _openExpenseModal('ADD')}
              setShowEditExpenseModal={() => _openExpenseModal('EDIT')}
              setShowViewExpenseModal={() => _openExpenseModal('VIEW')}
              setShowSettleUpModal={() => setSettleUp(true)} />
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
        subTitle='gsg'
        loading={false}
        body={<ExpenseModalBody />}
        footer={<FooterExpenseModal />} />
      <Modal
        showSlider={settleUp}
        setShowSlider={setSettleUp}
        title='SETTLE UP'
        subTitle='gsg'
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