const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true)
const Schema = mongoose.Schema

const articleSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: "预览内容"
    },
    pre_img: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    likers: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    collects: {
        type: Array,
        default: []
    },
    tags: {
        type: Array,
        default: []
    },
    body: {
        type: String,
        default: ""
    }

})

// # 3. 将文档结构发布为模型
const Article = mongoose.model('Article', articleSchema)

module.exports = Article