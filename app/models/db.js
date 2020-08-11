const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connectionDb = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connectionDb.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

connectionDb.query(
    'create table if not exists Customer(id int primary key auto_increment,email varchar(255)not null,name varchar(255)not null,active boolean);'
)

connectionDb.query(
    'create table if not exists User(id int primary key auto_increment,username varchar(255)not null,password varchar(255)not null,fullName varchar(255));'
)

module.exports = connectionDb;
