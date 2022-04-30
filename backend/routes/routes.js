const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const { Contract } = require("../database/connections.js");
const {
  createContract
} = require("../controllers/controllers.js");
const controller = require("../controllers/controllers.js");


router.route("/allContracts").get(async (req, res) => {
  const data = [{
    code:"Nda",
  name:"Confidencialidad",
  price:500.00
  },
  {
    code:"PowerLetter ",
  name:"Carta poder ",
  price:150.50
  },
  {
    code:"TermSheet",
  name:"Acuerdo de inversion",
  price:70.60
  },
  {
    code:"Leasing",
  name:"Arrendamiento",
  price:342.00
  },
  {
    code:"Employment",
  name:"Trabajo",
  price:700.50
  }]
  try {
    let info = Contract.findAll();
 if(info.length === undefined){
            data.map((e) => Contract.create(e))
    }


    res.json(await info); 
  } catch (e) {
    res.status(400).json({ error: "No information found" + e });
  }
});

router.post("/createContract", controller.createContract);



module.exports = router;
