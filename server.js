const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


const users = [];

dotenv.config({ path: './.env'})

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cookieParser());


app.set('view engine', 'ejs');

const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_ROOT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

app.use('/', require('./routes/pages'));


app.use('/public', express.static('public'));
app.use('/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/auth'))



db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connection done.")
})

app.get("/createdb", (req,res)=>{
    let sql="  CREATE DATABASE IF NOT EXISTS FoodOasis"
    db.query(sql, (err, result)=>{
        if (err) {throw err}
        console.log("result");
        res.send("Database Created")
    })
})



app.listen(3000)