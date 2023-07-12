//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using

const db_username = "postgres"
const db_password = "root";
const db_name = "chat-app";
const port = 5432;


const sequelize = new Sequelize(`${db_username}://${db_username}:${db_password}@localhost:${port}/${db_name}`, {dialect: "postgres"})


//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to ${db_name}`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model   
db.users = require('./user-model') (sequelize, DataTypes)    // this model is defined in this same directory

//exporting the module
module.exports = db