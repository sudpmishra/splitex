import React from 'react';
import './EachCard.css';

const EachCard = ({ setSlider, data, setSettleUpSlider, setShowViewExpenseModal }) => {
  return (
    <div className='col-6' onClick={() => setShowViewExpenseModal(data.id)}>
      <div className='card mb-10'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={data.picture} title={data.name}></img>
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between card-data'>
              <div className='flex-grow-1 ml-20 mr-10'>
                <h5><b>{data.title}</b></h5>
                <p className="text-end">{data.date}</p>
              </div>
              {data.paidByYou && <h6 className='amt-owed align-self-start'>रु {Math.round(data.amount, 2)}</h6>}
              {!data.paidByYou && <h6 className='amt-owed-to-you align-self-start'>रु {Math.round(data.amount, 2)}</h6>}
            </div>
            <div className='d-flex align-items-center justify-content-end card-icon'>
              <button className='btn btn-bg-color ml-10'><i className="fas fa-receipt"></i></button>
              <button className='btn btn-secondary ml-10' onClick={() => setSlider(true)}><i className="fas fa-image"></i></button>
              <button className='btn btn-primary ml-10' onClick={() => setSettleUpSlider(data.id)}><i className="fas fa-handshake"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EachCard;