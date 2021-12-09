import { useState } from "react";
const savedFriends = localStorage.getItem("friend-list") ? JSON.parse(localStorage.getItem("friend-list")) : []
function AddFriends() {
    const [friendList, setFriendList] = useState(savedFriends)
    const [inputName, setInputName] = useState("")
    const [showInput, setShowInput] = useState(false)
    const addFriend = () => {
        let updatedFriendList = [...friendList, { name: inputName }]
        setFriendList(updatedFriendList)
        localStorage.setItem("friend-list", JSON.stringify(updatedFriendList))
    }
    const toggleShow = ()=>{
        setShowInput(!showInput)
    }
    return (
        <div className="midbox">
            <div className="friends">
                <div className="friends-top">
                    <h4>Friends</h4>
                    <button className="btn btn-primary add-btn" onClick={()=>{toggleShow()}}><span className="plus1">+</span></button>
                </div>
                <ul>
                    {friendList.map((friend) => {
                        return (<li>{friend.name}</li>)
                    })}
                </ul>
                {showInput &&
                    <div className="searchbox">
                        <input type="text" id="fname" name="fname" value={inputName} onChange={(e) => { setInputName(e.target.value) }}></input>
                        <button className="input-btn" onClick={() => { addFriend() }}><span className="plus2">+</span></button>
                    </div>
                }
            </div>
            <div className="box">

            </div>
        </div>
    );
}

export default AddFriends;