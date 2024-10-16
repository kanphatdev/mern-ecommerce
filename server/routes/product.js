// import dependencies
const express = require("express");
// create express router
const router = express.Router();
// Import controllers
const {
  create,
  list,
  listby,
  remove,
  searchFilters,
  update,
  read,
  removeImages,
  createImages,
} = require("../controller/product");
// middleware
const { authCheck, adminCheck } = require("../middleware/authCheck");
//  route

router.post("/product", create);
router.get("/products/:count", list);
router.put("/product/:id", update);
router.get("/product/:id", read);
router.delete("/product/:id", remove);
router.post("/productby", listby);
router.post("/search/filters", searchFilters);
router.post("/images",authCheck,adminCheck, createImages);
router.post("/removeimages",authCheck,adminCheck, removeImages);
module.exports = router;
