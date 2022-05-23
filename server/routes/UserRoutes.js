const express = require("express");
const { loginContoller, registerController } = require("../controllers/UserController");

const route = express()

route.post('/register', registerController)

route.post('/login', loginContoller)

module.exports = route