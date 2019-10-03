const jwt = require("jsonwebtoken");
const { JWT_SECRETE } = require("../config/constants");
const { response } = require("../helpers/global");
module.exports = async (req, res, next) => {
    let { token } = req.headers;
    if(!token) {
        return res
            .status(403)
            .send(await response(0, "Authentication token required"));
    }
    try {
        let auth = jwt.verify(token, JWT_SECRETE);
        next();
        // return res.send({ auth });
        // next();
    } catch (error) {
        return res
            .status(401)
            .send(await response(0, "Authentication Error", error));
    }
};
