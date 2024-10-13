// import dependencies
const express = require("express");
// create express router
const router = express.Router();
// controller
const { register, login, currentUser } = require("../controller/auth");
const {adminCheck,authCheck} = require("../middleware/authCheck")
// routing path
router.post("/register", register);
router.post("/login", login);
router.post("/current-user",authCheck, currentUser);
router.post("/current-admin",authCheck,adminCheck, currentUser);

module.exports = router;
