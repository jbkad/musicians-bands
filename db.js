const path = require('path');
const { Sequelize, Model } = require('sequelize');

// DONE - create the new db connection
const db = new Sequelize({
	dialect: 'sqlite',
	storage: './data.sqlite'
})

module.exports = {
    db,
    Sequelize
};
