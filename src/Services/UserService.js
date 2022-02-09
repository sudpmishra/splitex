import http from "../Utils/http";
class UserService {
    static login = (user) => {
        http.post("api/auth/login", {
            "username": user.email,
            "password": user.password
        })
            .then((res) => {
                localStorage.setItem("user_auth_token", res.token)
                localStorage.setItem("refresh_token", res.refreshToken)
                res.token && window.location.reload()
            })
    }
    static logout = () => {
        localStorage.setItem("user_auth_token", null);
        window.location.reload();
    }
    static register = (params,setFormType)=>{
        http.post("api/auth/register", {
            "name": params.userName,
            "password": params.password,
            "username": params.email
        })
            .then(() => {
                setFormType("LOGIN")
            })
    }
    static send_email = (params,setMessage)=>{
        http.post("api/auth/forgot-password", {
            "email": params.email
        })
            .then(() => {
                setMessage("An email has been sent to you with instructions to reset your password")
            }).catch((err) => {
                setMessage(err.response.data.message)
            })
    }
}
export default UserService;