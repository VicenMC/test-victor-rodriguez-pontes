const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const { Contract } = require("../database/connections.js");
const {
  createContract
} = require("../controllers/controllers.js");
const controller = require("../controllers/controllers.js");


router.route("/allContracts").get(async (req, res) => {
  try {
    let info = await Contract.findAll();
    res.json(info); 
  } catch (e) {
    res.status(400).json({ error: "No information found" + e });
  }
});

router.post("/createContract", controller.createContract);



module.exports = router;
