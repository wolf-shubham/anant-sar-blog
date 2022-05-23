const bcrypt = require('bcrypt')
const { generateToken } = require('../config/generateToken')
const User = require('../models/UserModel')

const registerController = async (req, res) => {
    try {
        var { name, email, password } = req.body
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: 'email already exists use another email.' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        const token = await generateToken(user._id)
        var { password, ...userDetails } = user._doc
        return res.status(200).json({ message: 'register success', ...userDetails, token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

const loginContoller = async (req, res) => {
    try {
        var { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(404).json({ message: 'invalid email or password.' })
        }
        const token = await generateToken(user._id)
        var { password, ...userDetails } = user._doc
        return res.status(200).json({ message: 'login success', ...userDetails, token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

module.exports = { loginContoller, registerController }