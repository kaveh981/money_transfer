// Proper way to initialize and share the Database object

// Loading and initializing the library:
var pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
var cn = {
    host: 'elmer-01.db.elephantsql.com',
    port: 5432,
    database: 'nbexdqxv',
    user: 'nbexdqxv',
    password: 'eUMJBUyhIQSF5LTdduN8oZalgInf0tov'
};
// Creating a new database instance from the connection details:
var db = pgp(cn);


//dbMT.any("CREATE TABLE customer(ID INT PRIMARY KEY NOT NULL,FirstName TEXT NOT NULL,LastName TEXT NOT NULL,DOB DATE,Age INT,Address CHAR(50));")
//    .then(function (data) {
//    console.log("DATA:", data); // print data;
//})
//    .catch(function (error) {
//    console.log("ERROR:", error); // print the error;
//});

// Exporting the database object for shared use:
module.exports = db;