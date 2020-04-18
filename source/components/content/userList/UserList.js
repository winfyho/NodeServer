const template = `
<div class="user-list">
    <ul>
        <li class="title">
            <span class="username" >用户名</span>
            <span class="password">密码</span>
            <span class="openid">openid</span>
            <span class="init_time">注册时间</span>
        </li>
        <li v-for="user in userList">
            <span class="username" >{{user.username}}</span>
            <span class="password">{{user.password}}</span>
            <span class="openid">{{user.openid}}</span>
            <span class="init_time">{{user.init_time}}</span>

            
        </li>
    </ul>
    

</div>

`
import { request } from "../../../network/request.js"
export default {
    name: "user-list",
    template,
    data() {
        return {
            userList: []
        }
    },
    created() {
        request({
            method: "GET",
            url: "/users",
        })
            .then(users => {
                console.table(users)
                this.userList = users

            })
    },
}