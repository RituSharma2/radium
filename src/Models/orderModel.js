const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema

    ({

        userId: {
            type: mongoose.Schema.Types.ObjectId
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId
        },
        amount: Number,
        isFreeAppUser: {
            type:Boolean,
            default:true
        },
        orderAt: {
            type:Date,
            default:Date.now
        }






    }, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)