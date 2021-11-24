
const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')


//POST API TO CREATE USER

const createuser = async function (req, res) {
    try {
        var userDetails = req.body
        let savedData = await userModel.create(userDetails)
        res.send({ data: savedData })
    }
    catch (err) {
        console.log("this is error", err)
        res.status(400).send({ msg: "something went wrong", error: err })
    }

}

// POST API TO LOGIN USER AND GENERATE TOKEN

const loginUser = async function (req, res) {
    try {
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
    catch (err) {
        res.status(400).send({ msg: "something went wrong", error: err })
    }

}

// GET API TO GET USER AND DECODE TOKEN
const getUser = async function (req, res) {
    //let token = req.headers['x-auth-token']
    //if (!token) {
    //   return res.send({ status: false, msg: "no authication token" })
    // } else {

    //let decodeToken = jwt.verify(token, 'radium')
    try {
        if (req.decodeToken._id === req.params.userId) {
            let userDetails = await userModel.findOne({ _id: req.params.userId, isDeleted: false })
            if (userDetails) {
                res.send({ status: true, data: userDetails })
            } else { res.send({ status: false, msg: "no user available" }) }
        } else {
            res.send({ status: false, msg: "not authorized" })
        }
        // }
    } catch (err) {
        res.status(400).send({ msg: "something went wrong", error: err })
    }
};

// PUT API FOR UPDATE EMAIL

const updateEmail = async function (req, res) {
    //let token = req.headers['x-auth-token']
    //if (!token) {
    // return res.send({ status: false, msg: "no authentication token" })
    //} else {
    //let decodeToken = jwt.verify(token, 'radium')
    try {
        if (req.decodeToken._id == req.params.userId) {

            let userDetails = await userModel.findOneAndUpdate({ _id: req.params.userId }, { email: req.body.email }, { new: true })
            if (userDetails) {
                res.send({ msg: userDetails })
            } else {
                res.send({ status: false, msg: "invalid user" })
            }
        } else {
            res.send({ status: false, msg: "not authorized" })
        }
        // }
    } catch (err) {
        res.status(400).send({ msg: "something went wrong", error: err })
    }
}











module.exports.createuser = createuser
module.exports.getUser = getUser
module.exports.loginUser = loginUser
module.exports.updateEmail = updateEmail