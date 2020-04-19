const fs = require('fs')
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mount = require('koa-mount')
const static = require('koa-static')
const Router = require('koa-router')
require('./api/api.js')

const cors = require('koa2-cors');
const app = new koa()

app.use(cors({
    origin: function (ctx) {
        return "*"
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser())


app.use(
    static(__dirname + '/source/')
)
app.use(
    static(__dirname + '/model/')
)

console.log('127.0.0.1:3000')

const signRouter = require('./router/signRoute.js')
const articleRouter = require('./router/articleRoute.js')
app.use(signRouter.routes())
app.use(articleRouter.routes())


// app.use(
//     mount('/uploadimg', async (ctx) => {
//         console.log(ctx.request.files)

//         ctx.status = 200
//         ctx.body = JSON.stringify({
//             msg: 'uploadimg'
//         })
//     })
// )

// app.use(
//     mount('/admin_user', async (ctx) => {
//         ctx.status = 200
//         ctx.body = fs.readFileSync(__dirname + '/source/user.html', 'utf-8')
//     })
// )

// app.use(
//     mount('/admin_article', async (ctx) => {
//         ctx.status = 200
//         ctx.body = fs.readFileSync(__dirname + '/source/article.html', 'utf-8')
//     })
// )

app.use(
    mount('/', async (ctx) => {
        ctx.status = 200
        ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
    })
)



app.listen(3000)