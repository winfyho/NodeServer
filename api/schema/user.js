const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true)
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        default:""
    },
    openid: {
        type: String,
        required: true
    },
    init_time: {
        type: Number,
        required: true,
    },
    infor:{
        type:Object,
        default:{}
    }


})

// # 3. 将文档结构发布为模型
const User = mongoose.model('User', userSchema)

module.exports = User