const Blog = require('../models/BlogModel')

const createBlog = async (req, res) => {
    try {
        var { title, content, categories } = req.body
        const blog = await Blog.create({
            title,
            content,
            categories
        })
        return res.status(200).json({ message: 'create blog success', blog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        return res.status(200).json({ message: 'get all blogs success', blogs })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

const getBlogsByCategory = async (req, res) => {
    try {
        const categoryName = req.params.category
        // first alphabet og category should be capital
        const category = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)

        const blogs = await Blog.find({ categories: category })
        return res.status(200).json({ message: 'get blogs by category success', blogs })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

module.exports = { createBlog, getAllBlogs, getBlogsByCategory }