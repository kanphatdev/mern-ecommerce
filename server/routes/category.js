// import dependencies
const express = require("express");
// create express router
const router = express.Router();
// import controllers
const { create,list,remove } = require("../controller/category");
// import middleware
const {adminCheck,authCheck} = require("../middleware/authCheck")
// router routes
router.post("/category",authCheck,adminCheck, create);
router.get("/category",authCheck,adminCheck,list);
router.delete("/category/:id",authCheck,adminCheck, remove);

module.exports = router;
