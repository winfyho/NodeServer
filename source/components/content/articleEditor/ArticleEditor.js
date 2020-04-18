const template = `
<div class="article-editor">
    <div class="wraper">
        <h4>添加文章</h4>

        <section>
            <label>路径</label>
            <input type="text" v-model="url" >
        </section>

        <section>
            <label>标题</label>
            <input type="text" v-model="title">
        </section>

        <section>
            <label>时间</label>
            <input type="text" v-model="time">
        </section>

        <section>
            <label>分类</label>
            <input type="text" v-model="topic">
        </section>

        <section>
            <label>预览内容</label>
            <textarea name="" v-model="content"></textarea>
    
        </section>

        <section class="tags">
            <label>标签</label>
            <input type="text" v-model="tagName">

        </section>

        <ul class="tag-list">
            <li>es6</li>
        </ul>
        

        <section class="pre-img">
            <label>缩略图</label>

            <form action="http://127.0.0.1:3000/uploadimg" method="post" enctype="multipart/form-data">
                <input type="file" name="file" id="file" value="" multiple="multiple" />
                <input type="submit" value="提交"/>
            </form>

            
        </section>


        <button type="submit" @click="postArticle">发表文章</button>

    </div>
    

</div>

`
import { request } from "../../../network/request.js"
import { uploadFile } from "../../../network/file.js"
import { Article } from "../../../model/Article.js"
export default {
    name: "ArticleEditor",
    template,
    data() {
        return {
            url: "/notes/分类/标题.md",
            title: "输入标题",
            time: new Date().getTime(),
            topic: "es6",
            tagName: "js",
            tags: [],
            pre_img: "",
            content: "预览内容",
            file: null
        }
    },
    methods: {
        uploadImg() {
            let formData = new FormData()
            let inputDOM = this.$refs.inputer
            let imgFile = inputDOM.files[0]
            formData.append("pre_img", imgFile)
            console.log(imgFile, formData.getAll("pre_img"))
            uploadFile({
                url: '/uploadimg',
                file: formData
            }).then(res=>{
                console.log("uploadimg success")
                
            }).catch(err=>console.log(err)
            )


        },
        postArticle() {


            let art = new Article({
                url: this.url,
                title: this.title,
                time: this.time,
                topic: this.topic,
                tags: this.tags,
                pre_img: this.pre_img,
                content: this.content,
            })
            console.log(art)

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