const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        console.log(name, email, hashedPassword)
        return res.status(200).json({ message: 'register success', user })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

const loginContoller = async (req, res) => {
    try {
        return console.log('login success')
    } catch (error) {
        return console.log('login fail', error)
    }
}

module.exports = { loginContoller, registerController }