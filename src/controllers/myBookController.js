const myBookModel = require("../models/myBookModel")
const myAuthorModel = require("../models/myAuthorModel")
const publisher = require("../models/publisherModel")

// 2.Write a create book api that takes author from the request body. You
// have to first check if authorId is present as well a valid authorId.
// A valid authorId is which is present in your authors collection. Also
// make sure you receive a publisherId in the request and validate this id. 
//A valid publisherId is which is present in your publishers collection.

const createBooks = async function (req, res) {
    var data = req.body
    let authorId = req.body.author
    let publisherId = req.body.publisher
    let publisherreq = await publisher.findById(publisherId)
    let authorFromrequest = await myAuthorModel.findById(authorId)
    if (authorFromrequest) {
        if (publisherreq) {
            let bookCreate = await myBookModel.create(data)
            res.send({ data: bookCreate })
        } else {
            res.send({ msg: "no publisher id" })
        }

    } else {
        res.send({ msg: "no author id" })
    }

}

//3. Write a get books api that fetches all the books along with their author details (you have to 
//populate author)

const getallBooks = async function (req, res) {
    let allBooks = await myBookModel.find().populate('author')
    res.send(allBooks)
}

//5. Update the 3rd api (GET /books) such that in the authors details you receive _id, author_name
// and age.

const getauthor = async function (req, res) {
    let allBooks = await myBookModel.find().populate('author', { "author_name": 1, "_id": 1, "age": 1 })
    res.send(allBooks)
}
module.exports.createBooks = createBooks
module.exports.getallBooks = getallBooks
module.exports.getauthor = getauthor