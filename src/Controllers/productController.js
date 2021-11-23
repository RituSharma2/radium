const productModel = require("../models/productModel")


//Write a create author api that creates an author from the details in
// request body

const createproduct = async function (req, res) {
    var data = req.body
    let savedData = await productModel.create(data)
    res.send({ data: savedData })

}
module.exports.createproduct = createproduct