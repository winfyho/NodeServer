const template = `
<div class="sign-wraper">

    <div class="sign sign-in sign-out">
        <section>
            <label for="">邮箱</label>
            <input v-model="username" type="text" placeholder="输入邮箱">
        </section>

        <section>
            <label for="">密码</label>
            <input v-model="password" type="text" placeholder="输入邮箱">
        </section>

        <button @click="registe">注册</button>
        <button @click="signin">登陆</button>

    </div>

</div>

`
export default {
    name: "Sign",
    template,
    data(){
        return{
            username:"",
            password:"",
            mode:"sign" // registe
        }
    },
    methods:{
        registe(){
            console.log("注册",this.username,this.password)
            
        },
        signin(){
            console.log("登陆",this.username,this.password)

        }
    }
}