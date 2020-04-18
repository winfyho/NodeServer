const userSchema = require('./schema/user')

async function login(username, password) {
    console.log(username, password, String(password))
    return new Promise((resolve, reject) => {
        userSchema.find({
            username,
            password
        })
            .then(res => {
                console.log(res)
                resolve(res)
            })
    })

}

async function registe(user) {
    await new userSchema(user).save()
}

async function getAllUsers() {
    return new Promise((resolve, reject) => {
        userSchema.find().then(res => {
            console.log(res[1])
            resolve(res)
        })
            .catch(err => { reject(err) })
    })

}
module.exports = {
    login,
    registe,
    getAllUsers
}