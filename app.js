//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");

var route = express();

var items=["The Notebook", "Me-Before You", "How-to train your Dragon"]; // if we want to use render command and key then the value should be define at first ,,as we want to add more data thats why we take an array

route.set("view engine", "ejs"); // set ejs module in our js file , it should be written under the var route= express() line becasue it tells that we have use express with ejs engine

route.use(bodyParser.urlencoded({
  extended: true
}));

route.use(express.static("public"));

route.get("/", function(req, res) {
  var today = new Date(); // to get the current date

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var day = today.toLocaleDateString("en-US", options);  //auto date create


  res.render("list", {
    thisDay: day , newListItem: items // here thisday is key in our list.ejs file ... it should be matched in our app.js file ...and day is the objecht where we contain our data that we want to display in our home route

  });  // use combindly to list data ..otherwise it will make error or just use one render command
});

route.post("/", function(req,res){
var item=  req.body.newItem; // from here we get the dada from html/ejs by requesting
items.push(item); //push the new item in array , it will not replace by previous item
res.redirect("/");
});

route.listen(4000, function() {
  console.log("my page is now running at port 4000");
});



route.listen(3000, function() {
  console.log("my page is now running at port 3000");
});
