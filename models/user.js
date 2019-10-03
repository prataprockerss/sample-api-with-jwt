const { DB } = require('../config/constants')

module.exports = {
    userList: async (con, {user_id,mobile} = {}) => {
        let query = `
            SELECT 
                u.first_name, u.last_name,u.mobile,
                concat(u.first_name, " ", u.last_name ) as full_name,
                ud.salary
            FROM 
                ${DB.USER} u 
            LEFT JOIN 
                ${DB.USER_DETAIL} ud 
            ON
                u.id = ud.user_id
            WHERE 
                1 = 1
        `
        query +=  user_id ? ` AND u.id = "${user_id}"` : ``;
        query +=  mobile ? ` AND u.mobile = "${mobile}"` : ``;

        return await con.query(query)
    }
};
