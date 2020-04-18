const template = `
<div class="sign-wraper">

    <div class="sign sign-in sign-out">
        <section>
            <label for="">邮箱</label>
            <input v-model="username" type="text" placeholder="输入邮箱" required >
        </section>

        <section>
            <label for="">密码</label>
            <input v-model="password" type="text" placeholder="输入密码" required >
        </section>

        <section class="modif">
            <label for="">验证码</label>
            <input v-model="modifCode" type="text" required >
        </section>

        <button class="btn-submit" @click="registe">注册</button>
        <button class="btn-submit" @click="login">登陆</button>

    </div>

</div>

`
import { request } from "../../../network/request.js"
// import { User } from "../../../../model/User.js"
export default {
    name: "Sign",
    template,
    data() {
        return {
            username: "",
            password: "",
            modifCode:"",
            mode: "sign" // registe
        }
    },
    created(){
        request({
            method: "GET",
            url: "/users",
        })
        .then(users => {
            console.table(users)
            
        })
    },
    methods: {
        registe() {
            console.log("注册", this.username, this.password)
            request({
                method: "POST",
                url: "/registe",
                data: {
                    username: this.username,
                    password: this.password,
                }
            }).then(res => {
                console.log(res)
                
                if(res.isRegiste){
                    alert("该账号已经被注册")
                }else{
                    if(res.success){
                        alert("注册成功")
                    }
                }
            })

        },
        login() {
            // console.log("登陆", this.username, this.password)
            request({
                method: "GET",
                url: `/login?username=${this.username}&password=${this.password}`
            }).then(res => {
                if(res.success){
                    alert("登陆成功")
                }else{
                    alert("登陆失败")
                }
            })
            .catch(err => {
                alert("服务器繁忙")
            })
        }
    }
}