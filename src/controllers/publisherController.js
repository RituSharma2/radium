const publisherModel = require("../models/publisherModel")

//4. Write a post api that creates a publisher resource from the details in the request body

const createPublisher = async function (req, res) {
    var data = req.body
    let publisher = await publisherModel.create(data)
    res.send({ data: publisher })

}
module.exports.createPublisher = createPublisher