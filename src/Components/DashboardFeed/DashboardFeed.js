import React, { useState, useEffect } from 'react';
import EachCard from '../EachCard/EachCard';
import Tabs from '../Tabs/Tabs';
import Pagination from '../Pagination/Pagination';
import './DashboardFeed.css';

const tabOptions = [{ name: 'Home', icon: 'home' }, { name: 'About', icon: 'receipt' }, { name: 'Contact', icon: 'history' }, , { name: 'Contact', icon: 'chart-line' }];
const DashboardFeed = ({setSlider,setShowAddExpenseModal,setShowEditExpenseModal,setShowViewExpenseModal,setShowSettleUpModal}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [feedData, setFeedData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch('/dashboardFeed.json')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setFeedData(res);
        setTotalAmount(Math.round(res.reduce((acc, curr) => acc + curr.amount, 0), 2));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12 btn-strip">
          <div className="btn-left">
            <Tabs onTabChange={setSelectedTab} options={tabOptions} selectedTab={selectedTab} />
          </div>
          <div className="btn-right">
            <button className="btn btn-circular btn-primary ml-10" onClick={setShowAddExpenseModal}><i className="fas fa-plus-circle"></i></button>
            <button className="btn btn-circular btn-primary ml-10" onClick={setShowSettleUpModal}><i className="fas fa-handshake"></i></button>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="row">
          <div className="col-12">
            <div className="home-amt mb-10">
              <h3>Home</h3>
              <h6 className='amt-owed'>${totalAmount}</h6>
            </div>
          </div>
          {feedData.slice(page * 6 - 6, page * 6).map((data, index) => <EachCard key={index} setSlider={setSlider} data={data} />)}
          <div className="col-12 d-flex justify-content-end align-items-center">
            <Pagination pageNum={page} length={feedData.length} contentPerPage={6} onPageChange={setPage} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardFeed;