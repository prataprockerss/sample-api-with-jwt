const con = require("../config/db");
const { userList } = require("../models/user");
const { response } = require("../helpers/global");
module.exports = {
    userList: {
        get: async (req, res) => {
            let { id: user_id = null } = req.query;
            try {
                let user = await userList(con, {
                    user_id
                });
                return res
                    .status(200)
                    .send(await response(1, "User Listing", null, user));
            } catch (error) {
                return res
                    .status(503)
                    .send(
                        await response(0, "Error while fetching user", error)
                    );
            }
        }
    }
};
