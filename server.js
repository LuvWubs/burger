const express = require('express');
const bp = require('body-parser');
// const db = require('./models');

var PORT = process.env.PORT || 3000;
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(express.static("/views"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
