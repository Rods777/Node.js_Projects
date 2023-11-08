// Importing the module installed
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require("./db_connect");
const collection = "todo";

// Connecting to database
db.connect((err)=>{
    // Checking for errors
    if(err){
        console.log("Unable to connect to database");
        process.exit(1);
    }
    else{
        app.listen(3000, ()=>{
            console.log("Connected to database, app listening on port 3000");
        });
    }
})