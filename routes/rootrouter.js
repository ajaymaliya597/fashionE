const rootcontroller = require("../controllers/rootcontroller");

const express = require("express"); // Changed 'required' to 'require'
const router = express.Router();
router.get("/", rootcontroller); // Changed 'use' to 'get'
module.exports = router; // Changed 'rootcontroller' to 'router'
