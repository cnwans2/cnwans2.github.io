const express = require("express")

var PORT = process.env.PORT || 2226

var app = express ()
app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))

app.use (express.json())

var exphbs = require ("express-handlebars")

]6
ap p.engine("handlebars",exphbs({defaultLayout:"main"}))

app.set ("view engine", "handlebars")

var routes = require ("./controllers/burgers_Controllers")

app.use(routes) 

app.listen(PORT, function(){
    console.log("listen on Port", PORT)
})