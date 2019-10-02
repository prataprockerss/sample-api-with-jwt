const router = require("express").Router();
const userController = require("../controller/user");

/* GET users listing. */
router.get("/", userController.userList.get);

module.exports = router;
