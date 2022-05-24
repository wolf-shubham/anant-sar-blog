const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: 'https://res.cloudinary.com/dzqbzqgqw/image/upload/v1589788981/blog/default.jpg'
    },
    categories: [{
        type: String,
        default: 'misc'
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        comment: {
            type: String,
            required: true
        },
        commentPostedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }]
})

module.exports = mongoose.model('Blog', blogSchema)