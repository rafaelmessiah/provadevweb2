"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);
app.use(cors());


const port = 1234;

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});