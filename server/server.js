const express = require('express')
const UserRoutes = require('./routes/UserRoutes')
const BlogRoutes = require('./routes/BlogRoutes')
const dotenv = require('dotenv')
const dbConnection = require('./database/dbConnection')

const app = express()
const PORT = 5000
app.use(express.json())
dotenv.config({ path: '../.env' })
// console.log(process.env.MONGODB_URI)

app.get('/', (req, res) => {
    res.send('hello blog!!')
})

app.use('/user', UserRoutes)
app.use('/blog', BlogRoutes)

dbConnection()

app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})