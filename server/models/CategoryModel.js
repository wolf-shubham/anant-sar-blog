const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    blogByCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }]
})

module.exports = mongoose.model('Category', categorySchema)