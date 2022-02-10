import React from 'react';
import './NotificaionModal.css';

const NotificaionModal = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mt-10 mb-10">
        <button className='btn btn-clear btn-danger'><i className="fas fa-trash"></i><span className='ml-10'>Clear All</span></button>
      </div>
      <div className="notif-card mt-10 mb-10 d-flex align-items-center justify-content-end">
        <img src='https://randomuser.me/api/portraits/men/44.jpg'></img>'
        <div className="row">
          <div className="col-12 ml-10"><b>Sarah Conners</b> has requested to settle up <b>some expenses</b></div>
          <div className="col-12 d-flex align-items-center justify-content-end mt-10">
            <button className='btn btn-secondary btn-view mr-10'>View Request</button>
            <button className='btn btn-danger btn-confirm'>Confirm Request</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotificaionModal;