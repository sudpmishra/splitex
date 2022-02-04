import React, { useState } from 'react';
import EachFriend from '../EachFriend/EachFriend';
import './FriendList.css';
import friendData from "./../../MockData/friend.json"
import SearchBar from '../SearchBar/SearchBar';

const FriendList = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="btn-right">
            <button className="btn btn-circular btn-success mr-10" onClick={() => setShowSearch(true)}><i className="fas fa-user-plus"></i></button>
            <div className={showSearch ? "search-container show-search" : "search-container"}>
              <SearchBar options={friendData} onSelect={e => { debugger; console.log(e); setShowSearch(false) }} removeFromDom={() => setShowSearch(false)} show={showSearch}
                removeFromDom={() => setShowSearch(false)} defaultOption={true}/></div>
          </div>
        </div>
      </div>
      <div className="friend-card">
        <div className='row'>
          <div className="col-12">
            <h3 className='friend-title'>Your Friends</h3>
          </div>
        </div>
        <div className="friend-card-data">

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