const productcontroller = require("../controllers/productcontroller");

const express = require("express"); // Changed 'required' to 'require'
const router = express.Router();
router.get("/", productcontroller); // Changed 'use' to 'get'
router.get("/category/:category", productcontroller);
router.get("/subcategory/:subcategory", productcontroller);
router.get("/name/:name", productcontroller);
router.get("/id/:id", productcontroller);
router.get("/random", productcontroller);
router.get("/top-rated", productcontroller);
router.get("/lowtohigh", productcontroller);
router.get("/hightolow", productcontroller);


module.exports = router; // Changed 'rootcontroller' to 'router'
