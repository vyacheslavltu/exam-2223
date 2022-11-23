const express = require("express");
const app = express();
const port = 3003;
app.use(express.json({ limit: '10mb' }));
const cors = require("cors");
app.use(cors());
const md5 = require('js-md5');
const uuid = require('uuid');
const mysql = require("mysql");

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// const con = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "meal_orders",
// });

// check endpoint
app.get('/', (req, res) => {

    res.send('Respond success from endpoint root/');

});

// init app
app.listen(port, () => {
    console.log(`App listen at port ${port} `)
});