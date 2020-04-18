const template = `
<div class="articles">
    <ul>
        <li class="title">
            <span>文章名称</span>
            <span>创建时间</span>
            <span>浏览</span>
            <span>点赞</span>
            <span>评论</span>
        </li>
    </ul>
    

</div>

`
import { request } from "../../../network/request.js"
export default {
    name: "Articles",
    template,
    data() {
        return {
            articles: []
        }
    },
    created() {
        // request({
        //     method: "GET",
        //     url: "/users",
        // })
        //     .then(users => {
        //         console.table(users)
        //         this.userList = users

        //     })
    },
}