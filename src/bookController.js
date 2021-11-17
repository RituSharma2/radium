Assignment:

//Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 
//create the following API’s (write logic in bookController and routes in routes):
   //createBook : to create a new entry..use this api to create 11+ entries in your collection
	//   bookList : gives all the books- their bookName and authorName only 
	//getBooksInYear: takes year as input in post request and gives list of all books published that year
	//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
	//e.g if body had { name: “hi”} then you would fetch the books with this name
		//if body had { year: 2020} then you would fetch the books with this name
		//hence the condition will differ based on what you input in the request body
	//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
	///getRandomBooks - returns books that are available in stock or have more than 500 pages 




const BookModel= require("../models/bookModel.js")

const createBook= async function (req, res) {
    var data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})    
}


const getListofBooks= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1 ,authorName:1 }).count()
    res.send({msg: allBooks})
}

const getBooksinYear= async function (req, res) {
    let booksinYear= await BookModel.find({year:req.body.year})
    res.send({msg: booksinYear})
}

const getParticularBooks= async function (req, res) {
    let particularBooks= await BookModel.find(req.body)
    res.send({msg: particularBooks})
}

const getXINRBooks= async function (req, res) {
    let inrBooks= await BookModel.find({'price.INR':{$in:[100 ,200,350,400,500]}})
    res.send({msg: inrBooks})
}

const getRandomBooks= async function (req, res) {
    let randomBooks= await BookModel.find({$or:[{stocksAvailabe:true},{totalpages:{$gt:400}}]})
    res.send({msg: randomBooks})
}

module.exports.createBook= createBook
module.exports.getListofBooks= getListofBooks
module.exports.getBooksinYear= getBooksinYear
module.exports.getParticularBooks =  getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks