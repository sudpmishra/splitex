import React from 'react';
import EachCard from '../EachCard/EachCard';
import './DashboardFeed.css';

const DashboardFeed = ({setSlider,setShowAddExpenseModal,setShowEditExpenseModal,setShowViewExpenseModal}) => {
  return (
    <>
      <div className="row">
        <div className="col-12 btn-strip">
          <div className="btn-left">
            <button className="btn btn-primary"><i className="fas fa-home"></i> <span className='ml-10'>Home</span></button>
            <button className="btn btn-circular btn-secondary ml-10"><i className="fas fa-receipt"></i></button>
            <button className="btn btn-circular btn-secondary ml-10"><i className="fas fa-history"></i></button>
            <button className="btn btn-circular btn-secondary ml-10"><i className="fas fa-chart-line"></i></button>
          </div>
          <div className="btn-right">
            <button className="btn btn-circular btn-primary ml-10" onClick={setShowAddExpenseModal}><i className="fas fa-plus-circle"></i></button>
            <button className="btn btn-circular btn-primary ml-10"><i className="fas fa-handshake"></i></button>
          </div>
        </div>
      </div>
      <div className="home-card">
        <div className="row">
          <div className="col-12">
            <div className="home-amt mb-10">
              <h3>Home</h3>
              <h6 className='amt-owed'>$2655.25</h6>
            </div>
          </div>
          <EachCard setSlider={setSlider} />
          <EachCard setSlider={setSlider} />
          <EachCard setSlider={setSlider} />
          <EachCard setSlider={setSlider} />
          <EachCard setSlider={setSlider} />
        </div>
      </div>
    </>
  );
};
export default DashboardFeed;