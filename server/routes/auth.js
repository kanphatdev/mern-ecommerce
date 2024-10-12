// import dependencies
const express = require("express");
// create express router
const router = express.Router();
// controller
const { register, login, currentUser } = require("../controller/auth");
// routing path
router.post("/register", register);
router.post("/login", login);
router.post("/current-user", currentUser);
router.post("/current-admin", currentUser);

module.exports = router;
