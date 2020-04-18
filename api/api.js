const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true)
const Schema = mongoose.Schema

// # 1. 连接node数据库
mongoose.connect('mongodb://localhost:27017/winfyho');


// // # 3. 将文档结构发布为模型
// const User = mongoose.model('User', userSchema)

// module.exports = User

// // # 4. 获取模型构造函数
// var admin = new User({
//     title: 'flex布局',
//     url: '/markdown/css3/flex',
//     body: '# css3-flex布局',
//     views: 0,
//     likes: 0,
//     inittime: new Date().getTime(),
//     edittime: new Date().getTime(),
// })

// // - 增加记录
// admin.save().then(res => {
//     console.log("save success", res);

// })

// // - 查找多条记录
// Css3.find({
//     // inittime:1584379657699,
// })
//     .then(res => {
//         console.log("find", res);
//     })

// // - 查找一条记录
// Css3.findOne({
//     inittime: 1584379657699,
//     views: 0
// })
//     .then(res => {
//         console.log("findone", res);
//     })


// // - 删除一条记录
// Css3.deleteOne({
//     _id: "5e6fb6c05d378c1e200030f2"
// })
//     .then(res => {
//         console.log("remove success");
//     })

// // - 更新目标记录
// Css3.findByIdAndUpdate('5e6fba7356e49c2ccc11dd8a', {
//     inittime: 15000
// }).then(res => {
//     console.log("update success", res);
// })
