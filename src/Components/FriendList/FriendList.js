import React from 'react';
import EachFriend from '../EachFriend/EachFriend';
import './FriendList.css';
import friendData from "./../../MockData/friend.json"

const FriendList = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="btn-right">
            <button className="btn btn-circular btn-success ml-10"><i class="fas fa-user-plus"></i></button>
          </div>
        </div>
      </div>
      <div className="friend-card">
        <div className='row'>
          <div className="col-12">
            <h3 className='friend-title'>Your Friends</h3>
          </div>

          {
            friendData.map((friend) => {
              return (<EachFriend data={friend} />)
            })
          }

        </div>
      </div>
    </>
  );
};
export default FriendList;