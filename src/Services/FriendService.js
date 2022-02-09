import http from "../Utils/http"

export default class FriendService{
    static getFriendList = (setFriends)=>{
        http.get("/friend.json")
        .then((response)=>{
            setFriends(response)
        })
    }
}