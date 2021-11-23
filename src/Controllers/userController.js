
const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')


//POST API TO CREATE USER
const createuser = async function (req, res) {
    var userDetails = req.body
    let savedData = await userModel.create(userDetails)
    res.send({ data: savedData })

}
// POST API TO LOGIN USER AND GENERATE TOKEN
const loginUser = async function (req, res) {
    let data = req.body
    if (data.userName && data.password) {
        let user = await userModel.findOne({ name: data.userName, password: data.password, isDeleted: false })
        if (user) {
            let payload = { _id: user._id }
            let token = jwt.sign(payload, 'radium')
            res.send({ status: true, data: user, token: token })

        } else {
            res.send({ error: "invalid password and username" })
        }
    } else {
        res.send({ error: "request body must contain username and password" })
    }
}


// GET API TO GET USER AND DECODE TOKEN
const getUser = async function (req, res) {
    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ status: false, msg: "no authication token" })
    } else {

        let decodeToken = jwt.verify(token, 'radium')
        if (decodeToken) {
            let userDetails = await userModel.findOne({ _id: req.params.userId, isDeleted: false })
            if (userDetails) {
                res.send({ status: true, data: userDetails })
            } else ({ status: false, msg: "no user available" })
        } else {
            res.send({ status: false, msg: "invalied token" })
        }
    }
};

// PUT API FOR UPDATE EMAIL

const updateEmail = async function (req, res) {
    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ sataus: false })
    } else {
        let decodeToken = jwt.verify(token, 'radium')
        if (decodeToken) {

            let userDetails = await userModel.findOneAndUpdate({ _id: req.params.userId }, { email: req.body.email }, { new: true })
            res.send({ msg: userDetails })
        } else {
            res.send({ status: false , msg:"no user"})
        }
    }
}











module.exports.createuser = createuser
module.exports.getUser = getUser
module.exports.loginUser = loginUser
module.exports.updateEmail = updateEmail