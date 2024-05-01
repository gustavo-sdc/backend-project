const AppError = require('../utils/AppError')
const knex = require('../database/knex')
const { hash, compare } = require('bcryptjs')

class UserController {
    
    async createUser(req, res){
        const { name, email, password } = req.body

        const passwordHashed = await hash(password, 8)

        const newUser = await knex("users").insert({
            name,
            email,
            password: passwordHashed
        })


        return res.json({"ID do usuário":`${newUser}`})
    }

    async updateUser(req, res){
        const { email, new_password, password, id } = req.body

        const existense = await knex("users").select(["id"]).where({id})

        if(existense.length === 0){
            return res.status(400).json({"mensagem":"usuário inexistente"})
        }

        const passwordCheck = await knex('users').where({ id })
        const old_password = passwordCheck[0].password
        console.log(old_password)

        const checkPassword = await compare(old_password, password)
        
        console.log(checkPassword)

        if(passwordCheck.length === 0){
            return res.status(400).json({"mensagem":"senha antiga não encontrada"})
        } else if(checkPassword){
            return res.status(400).json({"mensagem":"senha incorreta"})
        }

        return res.json(checkPassword)

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