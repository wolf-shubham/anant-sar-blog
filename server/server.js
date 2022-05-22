const express = require('express')
const UserRoutes = require('./routes/UserRoutes')
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

dbConnection()

app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})