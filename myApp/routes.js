'use strict'

var express = require('express');
var router = express.Router();
let mysql = require('mysql');

//let connection =  server.dbConnection();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "24603759",
    database: "fas_db"
});

con.connect(function (err) {
    if (err) throw err;
});

/* User routes */

/*- GET */
router.get('/', function (req, res) {
    if (req.query.name) {
        con.query("SELECT * FROM users WHERE users.users_name = '" + 'ANDRES FELIPE SERRATO GOMEZ' + "'", function (err, result) {
            if (err) res.send(err)

            res.send(result)
        })
    } else {
        con.query("SELECT * FROM users", function (err, result) {
            if (err) res.send(err)

            res.send(result)
        })
    }
})


/*- POST */
router.post('/', function (req, res) {
    var values = "'1234193054" + "','carlos" + "','cuervo" +  "'carlos.cuervo@correounivalle.edu.co"+ "',''https://lh5.googleusercontent.com/-3msZ4KPNX_M/AAAAAAAAAAI/AAAAAAAAAEo/V7KuSoiXN9M/s96-c/photo.jpg'";
    con.query("INSERT INTO users (identification,users_name,last_name, email, picture) VALUES ( '1234193054 ','carlos','cuervo','carlos.cuervo@correounivalle.edu.co','https://lh5.googleusercontent.com/-3msZ4KPNX_M/AAAAAAAAAAI/AAAAAAAAAEo/V7KuSoiXN9M/s96-c/photo.jpg');", function (err, result) {
        if (err) res.send(err)
        
        res.send(result)
    })
})

/*- PUT */
router.put('/:identification ', function (req, res) {
    con.query("UPDATE users SET email = 'andresow0898@correounivalle.edu.co'  WHERE users.identification  = + '1'; " , function (err, result) {
        if (err) res.send(err)

        res.send(result)
    })
})

/*- DELETE */
router.delete('/:identification', function (req, res) {
    con.query("DELETE FROM users WHERE users.identification  =" + 1, function (err, result) {
        if (err) res.send(err)

        res.send(result)
    })
})

module.exports = router;