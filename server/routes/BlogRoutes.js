const { createBlog, getAllBlogs } = require('../controllers/BlogController')

const route = require('express')()

route.post('/createblog', createBlog)

route.get('/getallblogs', getAllBlogs)

module.exports = route