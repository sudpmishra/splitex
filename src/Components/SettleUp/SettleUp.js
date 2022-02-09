import React, { useState,useEffect } from 'react';
import TransactionService from '../../Services/TransactionService';
import Inputs from '../Inputs/Inputs';
import './SettleUp.css';
// import settleUpData from '../../MockData/settleup.json';


const SettleUp = () => {
  const [settleWith, setSettleWith] = useState('');
  const [settleExpense, setSettleExpense] = useState('');
  const [settleUpData, setSettleUpData] = useState([])

  useEffect(() => {
    TransactionService.getSettleUpData(setSettleUpData)  
  }, [])
  
  return (
    <>
      <div className="row">
        <div className="col-6">
          <Inputs.DropDown
            value={settleWith}
            setValue={setSettleWith}
            type="text"
            label="With:"
            options={[{ name: 'Sudeep', value: 1 }, { name: 'John', value: 2 }, { name: 'Jane', value: 3 }]}
          />
        </div>
        <div className="col-6">
          <Inputs.DropDown
            value={settleExpense}
            setValue={setSettleExpense}
            type="text"
            label="Expense:"
            options={[{ name: 'All', value: 0 }, ...settleUpData.map((data, index) => {
              return {
                name: data.title,
                value: index + 1
              }
            })]}
          />
        </div>
      </div>
      <div className="row expense-list">
        <span>Expense List</span>
      </div>
      <div className="row">
        <div className="col-12">
          <table>
            <thead>
              <tr className='expense-table-top'>
                <th>Title</th>
                <th>Date</th>
                <th>Paid By</th>
                <th>Amount</th>
                <th>Paid By You</th>
                <th>Paid For You</th>
              </tr>
            </thead>
            <tbody>
              {settleUpData.map((data, index) => {
                return (
                  <tr className='expense-table-data' key={index}>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.paidBy}</td>
                    <td>{data.amount}</td>
                    <td>{data.paidByYou}</td>
                    <td>{data.paidForYou}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default SettleUp;