const { createBlog, getAllBlogs, getBlogsByCategory } = require('../controllers/BlogController')

const route = require('express')()

route.post('/createblog', createBlog)

route.get('/getallblogs', getAllBlogs)

route.get('/getblogsbycategory/:category', getBlogsByCategory)

module.exports = route