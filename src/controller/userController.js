class UserController {
    
    async createUser(req, res){
        const { name, email, password } = req.body

        return res.json({
            "name": name,
            "email":email,
            "password":password
        })
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