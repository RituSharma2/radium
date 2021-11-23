const userModel = require("../models/userModel")


//Write a create author api that creates an author from the details in
// request body

const createuser = async function (req, res) {
    var data = req.body
    let user = await userModel.create(data)
    res.send({ data: user })

}
module.exports.createuser = createuser