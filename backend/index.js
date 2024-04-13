var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer=require( 'multer' ) ; 

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://priyanshshajan03:jyacGZRxq94G0mEH@cluster0.dpkfss5.mongodb.net/";

var DATABASENAME="EventManagement";
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Connected to Database!");
    })
})