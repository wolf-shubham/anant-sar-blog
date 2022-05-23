const jsonwebtoken = require('jsonwebtoken')

const generateToken = async (userId) => {
    const token = await jsonwebtoken.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: '30d' })
    return token
}

module.exports = { generateToken }


