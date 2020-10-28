"use strict";
exports.__esModule = true;
//import express module
//express moudule use to develop rest api
var express = require("express");
var mongodb = require("mongodb");
//create client ..mongodb use client serever artitature
var ac_client = mongodb.MongoClient;
//need to  creat  custom module
var ac_module = express.Router().get("/", function (req, res) {
    ac_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("ecom_db_cloud");
            db.collection("ac_col").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports["default"] = ac_module;
