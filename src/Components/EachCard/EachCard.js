import React from 'react';
import './EachCard.css';

const EachCard = ({ setSlider }) => {
  return (
    <div className='col-6'>
      <div className='card mb-10'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vus934rJkI6vZQKN07jnLnxkdSGmpqB9Ow&usqp=CAU'></img>
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between card-data'>
              <div className='flex-grow-1 ml-20 mr-10'>
                <h5><b>Movie</b></h5>
                <p className="text-end">23rd Jan, 2022</p>
              </div>
              <button className='btn btn-success align-self-start'>$521.23</button>
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