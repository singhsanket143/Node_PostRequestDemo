var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});
var friends = ["Tony", "hawk", "captain", "thor", "hulk"];


app.post("/addFriend", function (req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends")
});
app.get("/friends", function (req, res) {

    res.render("friend", {friends: friends});
});
app.listen(3000, function () {
    console.log("Server started");
});
