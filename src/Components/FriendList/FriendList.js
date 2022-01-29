import React, { useState } from 'react';
import EachFriend from '../EachFriend/EachFriend';
import './FriendList.css';
import friendData from "./../../MockData/friend.json"
import peopleList from './../../MockData/people.json';
import SearchBar from '../SearchBar/SearchBar';

const FriendList = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="btn-right">
            {!showSearch && <button className="btn btn-circular btn-success ml-10" onClick={() => setShowSearch(true)}><i className="fas fa-user-plus"></i></button>}
            {showSearch && <SearchBar options={peopleList} onSelect={e => { console.log(e); setShowSearch(false) }} />}
          </div>
        </div>
      </div>
      <div className="friend-card">
        <div className='row'>
          <div className="col-12">
            <h3 className='friend-title'>Your Friends</h3>
          </div>

          {
            friendData.map((friend, index) => {
              return (<EachFriend key={index} data={friend} />)
            })
          }

        </div>
      </div>
    </>
  );
};
export default FriendList;