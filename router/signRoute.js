const Router = require('koa-router')
const signRouter = new Router()
const userAPI = require('../api/userAPI.js')
const userSchema = require('../api/schema/user')
signRouter.get('/login', async (ctx) => {
    const { username, password } = ctx.query
    console.log("login", username, password)
    
    await userAPI.login(username, password)
    .then(res => {
        console.log("登陆成功", res)
        if(res.length > 0){
            ctx.status = 200
            ctx.body = JSON.stringify({
                status: 200,
                success: true,
                msg: "登陆成功",
                user:res[0]
            })
        }else{
            console.log("登陆失败",res)
            ctx.status = 200
            ctx.body = JSON.stringify({
                status: 200,
                success: false,
                msg: "登陆失败"
            })
        }
    })
    .catch(err => {
        ctx.status = 500
    })
    
})

signRouter.post('/registe', async (ctx) => {

    console.log(ctx.request.body)
    const { username, password } = ctx.request.body
    const openid = `${username.slice(0, 2)}${new Date().getTime()}`
    const init_time = new Date().getTime()

    console.log("注册消息", {
        username,
        password,
        openid,
        init_time,
    })
    let isRegiste = await userSchema.findOne({ username })
    if (isRegiste) {
        console.log("已经注册了")
        ctx.status = 200
        ctx.body = JSON.stringify({
            isRegiste: true,
            success: false
        })
    } else {
        await userAPI.registe({
            username,
            password,
            openid,
            init_time,
        })
        console.log("注册成功")
        ctx.status = 200
        ctx.body = JSON.stringify({
            isRegiste: false,
            success: true
        })
    }


})

signRouter.get('/users', async (ctx) => {
    
    let res = await userAPI.getAllUsers()
    console.log("所有用户", res)
    ctx.status = 200
    // ctx.set('Cache-Control', 'max-age=3600');
    ctx.body = res

})

module.exports = signRouter
