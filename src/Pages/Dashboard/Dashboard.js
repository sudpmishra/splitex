import React, { useState } from 'react';
import './Dashboard.css';
import logo from './../../logo.png';
import Modal from '../../Components/Modal/Modal';
import DashboardFeed from '../../Components/DashboardFeed/DashboardFeed';
import FriendList from '../../Components/FriendList/FriendList';
import jwtDecode from 'jwt-decode';
import Inputs from '../../Components/Inputs/Inputs';
import userList from '../../MockData/friend.json';

// const userData = jwtDecode(localStorage.getItem('auth_token')).user;
const userData = { name: 'Sujina', username: "suzeena.mhrn@gmail.com" }
const Dashboard = () => {
  const [slider, setSlider] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseModalType, setExpenseModalType] = useState('ADD');
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
              setShowViewExpenseModal={() => _openExpenseModal('VIEW')} />
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
        body={<Expense />} />
      <footer>
        <span>Copyright 2022, SplitEx</span>
      </footer>
    </>
  );
};

const Expense = ({ }) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date());
  const [peopleInvolved, setPeopleInvolved] = useState([])
  const [paidBy, setPaidBy] = useState('');
  const [receipt, setReceipt] = useState('');
  const [amount, setAmount] = useState();
  const [splitEvenly, setSplitEvenly] = useState('');
  const [eachSplitAmount, setEachSplitAmount] = useState([]);
  const _setSplitAmount = (index,e) => {
    var eachSplitAmountCopy = [...eachSplitAmount]
    const name = index===0?'You': peopleInvolved[index-1].name
    eachSplitAmountCopy[index] = { name : name, amount: e }
    setEachSplitAmount(eachSplitAmountCopy)
  }
  return (
    <div className='row'>
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            <Inputs.TextBox
              value={title}
              setValue={setTitle}
              type="text"
              label="Title:"
            // disabled= {type==='VIEW'?true:false}
            />
          </div>
          <div className="col-12">
            <Inputs.CustomDatePicker
              value={date}
              setValue={setDate}
              label="Date:"
              iconLabel="calendar" />
          </div>
          <div className="col-12">
            <Inputs.MultiSelect
              value={peopleInvolved}
              setValue={setPeopleInvolved}
              type="text"
              label="Name:"
              options={userList}
            />
          </div>
          <div className="col-12">
            <Inputs.DropDown
              value={paidBy}
              setValue={setPaidBy}
              type="text"
              label="Paid By:"
              options={[{ name: 'You', value: 0 }, ...peopleInvolved.map((people) => { return { name: people.name, value: people._id } })]}
            />
          </div>
          <div className="col-12">
            <Inputs.ImageUpload
              value={receipt}
              setValue={setReceipt}
              type="text"
              label="Receipt"
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className='row'>
          <div className="col-6">
            <Inputs.TextBox
              value={amount}
              setValue={setAmount}
              type="number"
              label="Amount"
            />
          </div>
          <div className="col-6">
            <Inputs.Radio
              value={splitEvenly}
              setValue={setSplitEvenly}
              label="Split Evenly?"
              options={[{ name: 'Dont Split Evenly' }, { name: 'Split Evenly' }]}
            />
          </div>
          <div className="col-12 split-bill">
            <span>Split Bill</span>
          </div>
          <div className="col-6">
            <Inputs.TextBox
              value={eachSplitAmount[0]}
              setValue={e=>_setSplitAmount(0,e)}
              type="number"
              label="You"
            />
          </div>
          {peopleInvolved.map((people, index) => {
            return (
              <div className="col-6">
                <Inputs.TextBox
                  value={eachSplitAmount[index + 1]}
                  setValue={e=>_setSplitAmount(index + 1,e)}
                  type="number"
                  label={people.name}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const ModalBody = () => {
  return (
    <div className="bill-image">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPR5QNTgExD351P1uVI-t_SUtr_0cUVPikdA&usqp=CAU'></img>
    </div>
  )
}
export default Dashboard;