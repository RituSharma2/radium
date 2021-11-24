const jwt = require('jsonwebtoken')
const authication = function (req, res, next) {

    let token = req.headers['x-auth-token']
    if (!token) {
        return res.status(401).send({ status: false, msg: "no authentication token" })
    } else {
        let decodeToken = jwt.verify(token, 'radium')
        if (decodeToken) {
            req.decodeToken = decodeToken
            next()

        } else {
            res.send({ status: false, msg: "not a valid token" })
        }
    }
}

module.exports.authication = authication