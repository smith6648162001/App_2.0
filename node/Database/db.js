const {Sequelize} = require("sequelize");

const database = new Sequelize('peliculas','root','72618466DUBERsmith',{
    host: 'localhost',
    port: '3307',
    dialect: 'mysql'
});

module.exports.database = database;


try {
    database.authenticate();
    console.log("Conectado");
}catch (error){
    console.log("Algo esta mal, revisemos");
}

