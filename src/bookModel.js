const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        unique:true,
        requried : true
    } ,
    price:{
        INR:String,
        Euro:String
    },
    year: Number,
    tags :[String],
    authorName : String,
    totalpages: Number,
    stocksAvailabe:{
        Boolean , default:false
    }
    


   

}, {timestamps: true} )

module.exports=mongoose.model('Book',bookSchema)

// String, Number
// Boolean, Object/json, array