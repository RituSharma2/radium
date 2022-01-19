const authorModel = require("../model/authorModel")



//=======================================================================================
const createAuthor = async function (req, res) {
    try{
        var data = req.body
    let savedData = await authorModel.create(data)
    res.status(200).send({ data: savedData })
}catch(error){
    res.status(500).send({status:"failed",message:error.message})
    }

}
//========================================================================================

const loginAuthor = async function (req, res) {
    try {
        let data = req.body
        if (data.email && data.password) {
            let author = await authorModel.findOne({ email: data.email, password: data.password })
            if (author) {
                let payload = { _id: author._id }
                let token = jwt.sign(payload, 'backend')
                res.status(200).send({ status: true, data: author, token: token })
            } else {
                res.status(400).send({ status: false, msg: "invalid email and password" })
            }
        } else {
            res.status(400).send({ status: false, msg: "request body must contain email and password" })
        }

    } catch (err) {
        res.status(400).send({ status: "something went wrong", error: err })
    }
}
module.exports.createAuthor = createAuthor
module.exports.loginAuthor = loginAuthor








    





