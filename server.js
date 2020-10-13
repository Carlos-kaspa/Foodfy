const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine' , 'html')

server.use(express.static('public'))

nunjucks.configure("views", {

    express:server
})

server.get("/", function(req,res){

    return res.render("index")
})

server.get("/index.html", function(req,res){

    return res.render("index")
})

server.get("/sobre.html", function(req,res){

    return res.render("sobre")
})

server.get("/receitas.html", function(req,res){

    return res.render("receitas")
})


/*server.get("/github.com/carlos-kaspa", function(req,res){

    return res.redirect("https://github.com/Carlos-kaspa/Foodfy")
})
*/

server.listen(5000, function() {

    console.log("Server's up")

})



