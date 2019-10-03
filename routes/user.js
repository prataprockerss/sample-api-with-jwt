const router = require("express").Router();
const userController = require("../controller/user");
const auth = require("../middleware/auth");

/* GET users listing. */
router.get("/", auth, userController.userList.get);

module.exports = router;
