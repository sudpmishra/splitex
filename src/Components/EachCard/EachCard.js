import React from 'react';
import './EachCard.css';

const EachCard = ({ setSlider, data }) => {
  return (
    <div className='col-6'>
      <div className='card mb-10'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={data.picture} title={data.name}></img>
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between card-data'>
              <div className='flex-grow-1 ml-20 mr-10'>
                <h5><b>{data.title}</b></h5>
                <p className="text-end">{data.date}</p>
              </div>
              <button className='btn btn-success align-self-start'>${data.amount}</button>
            </div>
            <div className='d-flex align-items-center justify-content-end card-icon'>
              <button className='btn btn-bg-color ml-10'><i className="fas fa-receipt"></i></button>
              <button className='btn btn-secondary ml-10' onClick={() => setSlider(true)}><i className="fas fa-image"></i></button>
              <button className='btn btn-primary ml-10'><i className="fas fa-handshake"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EachCard;