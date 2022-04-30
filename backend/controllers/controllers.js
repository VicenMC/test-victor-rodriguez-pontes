const { default: axios } = require("axios");
const { Contract } = require("../database/connections.js");


//http://api.countrylayer.com/v2/all?access_key=e92fb250090460d9d89a034718115410

module.exports = {
  async createContract(req, res) {
    const { code, name, price } = req.body;
    try {
      const [key, value] = await Contract.findOrCreate({
        where: { code },
        defaults: {
          name,
          price,
        },
      });
      const contract = await Contract.findAll({
        where: { code },
      });
      res.json(key);
    } catch (e) {
      console.log("Error" + e);
    }
  },
};
