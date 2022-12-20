import request from "../../Utils/Request"

export function GetJWT() {
    return request({
        url: "User/Login",
        method: 'post',
        data: { "email": "gary1@gmail.com", "password": "password" }
    })
}