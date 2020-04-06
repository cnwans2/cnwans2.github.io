var express = require("express");
//establish a port for the application 
var PORT = process.env.PORT || 8000;
var app = express();

// running express through the public foler to run the application 
app.use(express.static("public"));

// Parse the package json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
