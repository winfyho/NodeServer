export class Article {
    constructor(article) {
        this.url = article.url || ""
        this.title = article.title || ""
        this.time = article.time || new Date().getTime()
        this.topic = article.topic || ""
        this.tags = article.tags || []
        this.pre_img = article.pre_img || ""
        this.content = article.content || ""
        this.body = article.body || ""
        this.views = 0
        this.likes = 0
        this.likers = []
        this.comments = []
        this.collects = []
    }

}