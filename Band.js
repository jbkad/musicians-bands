const { db } = require('./db');
const { DataTypes } = require('sequelize')
// TODO - define the Band model

// let Band;

const Band = db.define('Band', {
    name: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING }
})

// async function main(){
//     await Band.sync()
//     await Band.create({
//         title: 'Queen'
//     })
// }

module.exports = { Band };