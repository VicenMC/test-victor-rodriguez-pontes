const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("Contract", {
		code: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	});
};
