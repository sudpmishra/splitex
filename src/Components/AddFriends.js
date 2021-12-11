//importing useState hook used to create and update state variable
import { useState } from "react";

//get data from localstorage if there is data else set empty array
const savedFriends = localStorage.getItem("friend-list") ? JSON.parse(localStorage.getItem("friend-list")) : []
function AddFriends() {
    //state variables friendList, inputName, showInput
    const [friendList, setFriendList] = useState(savedFriends)
    const [inputName, setInputName] = useState("")
    const [showInput, setShowInput] = useState(false)

    //function to add friend
    const addFriend = () => {
        //create copy of friendList state and add new name to the copy
        // friendList = [{name: 'Tim'}]
        let updatedFriendList = [...friendList, { name: inputName }]
        // updatedFriendList = [{name: 'tim'}, {name: 'jack'}]

        //set the copy as original friendlist state
        setFriendList(updatedFriendList)
        //friendlist =  [{name: 'tim'}, {name: 'jack'}]

        //save the copy in string format to localstorage
        localStorage.setItem("friend-list", JSON.stringify(updatedFriendList))
        //localstorage['friend-list'] =  [{name: 'tim'}, {name: 'jack'}]
    }

    // change showInput variable to negative of what it was (ie true if false and false if true)
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
                {/* show input if and only if showInput is true. if show inout is false do not show the input add add button */}
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