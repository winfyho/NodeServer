const Router = require('koa-router')
const articleRouter = new Router()
const articleAPI = require('../api/articleAPI.js')




articleRouter.post('/article/post', async (ctx) => {
    let article = ctx.request.body
    // console.log(article)
    await articleAPI.postArticle(article).then(res => {
        console.log(res)
        ctx.status = 200
        ctx.body = JSON.stringify({
            success: true
        })
    })

})

articleRouter.get('/article/all', async (ctx) => {
    let articles = await articleAPI.getArticles()
    console.log(articles)

    ctx.status = 200
    ctx.body = articles
})



module.exports = articleRouter
