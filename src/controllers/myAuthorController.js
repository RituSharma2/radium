const myAuthorModel = require("../models/myAuthorModel")


//Write a create author api that creates an author from the details in
// request body

const createauthor = async function (req, res) {
    var data = req.body
    let savedData = await myAuthorModel.create(data)
    res.send({ data: savedData })

}
module.exports.createauthor = createauthor