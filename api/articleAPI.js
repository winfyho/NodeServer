const articleSchema = require('./schema/article')

async function postArticle(article) {
    console.log(article)
    await new articleSchema(article).save()
}

async function getArticles() {

    return  new Promise((resolve,reject) => {
        articleSchema.find().then(res=> {
            console.log(res)
            if(res && res.length > 0){
                resolve(res)
            }else{
                reject("无数据")
            }
        })
        
    })
}


module.exports = {
    postArticle,
    getArticles
}