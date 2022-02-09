import http from "../Utils/http"

export default class TransactionService{
    static getSettleUpData = setSettleUpData =>{
        http.get("/settleup.json")
        .then((res)=>{
            setSettleUpData(res)
        })
    }
}