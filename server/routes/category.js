// import dependencies
const express = require("express");
// create express router
const router = express.Router();
// import controllers
const { create,list,remove } = require("../controller/category");
// router routes
router.post("/category", create);
router.get("/category",list);
router.delete("/category/:id", remove);

module.exports = router;
