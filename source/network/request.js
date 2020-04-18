import { ajax } from "./ajax.js"
// import axios from 'axios'

export function request(config) {

    return new Promise((resolve, reject) => {
        // const instance = axios.create({
        //     baseURL: 'http://127.0.0.1:3000',
        //     timeout: 5000,
        //   });
        //   console.log(instance)
        if(config.data){
            console.log(config.data)
        }
        const baseUrl = "http://127.0.0.1:3000"
        config.url =  `${baseUrl}${config.url}`
        // console.log(config.url)
        
        ajax(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}