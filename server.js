//jshint esversion:6

const express =require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact Me at : Piyush@gmail.com");
});

app.get("/about", function(req, res){
  res.send("About Me : I want to be a web developer");
});

app.get("/hobb", function(req, res){
  res.send("About Me : I like to code.");
});

app.listen(3000, function (){
  console.log("Server has been started on port 3000");
});
