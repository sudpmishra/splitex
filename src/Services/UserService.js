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
}
export default UserService;