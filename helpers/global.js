module.exports = {
    response: (status, msg, err = null, data = {}, mobile_msg = "") => {
        return new Promise(resolve => {
            resolve({
                status,
                msg,
                mobile_msg: mobile_msg != "" ? mobile_msg : msg,
                data,
                err
            });
        });
    }
};
