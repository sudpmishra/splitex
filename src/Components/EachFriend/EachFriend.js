import React from 'react';
import './EachFriend.css';

const EachFriend = ({data}) => {
  return (
    <div className='col-12'>
      <div className='card mb-10'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={data.picture}></img>
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center justify-content-between friend-data'>
              <div className='flex-grow-1 ml-20 mr-10'>
                <h6><b>{data.name}</b></h6>
                <p>{data.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EachFriend;