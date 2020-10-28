//import express module
//express moudule use to develop rest api
import * as express from "express";
import * as mongodb from "mongodb";

//create client ..mongodb use client serever artitature
let ac_client = mongodb.MongoClient;

//need to  creat  custom module
let ac_module= express.Router().get("/",(req,res)=>{
       ac_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority", (err,client)=>{
           if(err) throw err;
           else{
               let db =client.db("ecom_db_cloud");
               db.collection("ac_col").find().toArray((err,array)=>{
                   if(err) throw err;
                   else{
                       res.send(array);

                   }

               });
               
           }
       });
});
export default ac_module;
