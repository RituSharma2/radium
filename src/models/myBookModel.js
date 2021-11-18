const mongoose = require('mongoose')

const myBookSchema = new mongoose.Schema
    //const ObjectId= mongoose.Schema.Types.ObjectId
    ({


        book_name: String,

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MyAuthor'
        },
        price: Number,

        ratings: Number,

        publisher:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Publisher'
        }

    }, { timestamps: true })

module.exports = mongoose.model('MyBook', myBookSchema)