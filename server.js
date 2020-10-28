"use strict";
exports.__esModule = true;
var getac_1 = require("./ac/getac");
var getvm_1 = require("./vm/getvm");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use("/ac", getac_1["default"]);
app.use("/vw", getvm_1["default"]);
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log("server started");
});
