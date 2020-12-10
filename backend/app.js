var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json("Hello from the backend");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});