const knex = require('../database/knex')
const { hash } = require('bcrypt')

class UserController {
    
    async createUser(req, res){
        const { name, email, password } = req.body

        //const checkUserExists = await knex("users").select(email)
        //console.log(checkUserExists)

        const newUser = await knex("users").insert({
            name,
            email,
            password
        })

        return res.json()
    }

    async updateUser(req, res){
        const { email, password } = req.body
        const { id } = req.params

        return res.json()

    }

    async showUser(req, res){
        const { email, password} = req.body
        return res.json()
    }

    async deleteUser(req, res){

        const { email, password } = req.body
        return res.json()
    }
}

module.exports = UserController