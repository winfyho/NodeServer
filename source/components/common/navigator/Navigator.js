const template = `
<div class="navigator">
    <div class="routes" >
        <a href="/admin_article" :class="{active:route==='article'}">文章</a>
        <a href="/admin_user" :class="{active:route==='user'}">用户</a>
        <a href="" :class="{active:route==='other'}">其他</a>

    </div>
    
</div>

`
// import { request } from "../../../network/request.js"

export default {
    name: "NavigatorHead",
    template,
    props:{
        route:{
            type:String
        }
    }

}