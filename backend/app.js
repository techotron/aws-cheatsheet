var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.get("/", (req, res, next) => {
    res.json("Hello from the backend");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});