const { DB } = require('../config/constants')

module.exports = {
    userList: async (con, {mobile}) => {
        let query = `
            SELECT 
                u.first_name, u.last_name,u.mobile,
                concat(u.first_name, " ", u.last_name ) as full_name,
                ud.salary
            FROM 
                ${DB.user} u 
            LEFT JOIN 
                ${DB.USER_DETAIL} ud 
            ON 
                u.id = ud.user_id
            WHERE 
                1 = 1
        `
        query +=  mobile ? ` AND u.mobile = "${mobile}"` : ``;

        return await con.query(query)
    }
};
