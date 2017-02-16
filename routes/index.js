var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



//TO GET THE HOMEPAGE
router.get('/', function(req, res, next) {
  res.render('index');
});

//************************************************************* */
router.post('/details',function(req, res, next) {
  var query =req.body.actor;
  var query1 =req.body.director;
  var query2 =req.body.title;
  var req1 = new XMLHttpRequest();

  var URL = "https://netflixroulette.net/api/api.php?";

  if(!query&&!query1&&query2){
    req1.open('GET', URL + "title=" + query2, true);
         req1.addEventListener("load", function() {
         response = JSON.parse(req1.responseText);
	       console.log(response);  // YOU CAN SEE THE RESULT COMING HERE IN CONSOLE..
         });
         req1.send(null);
         res.send(response);
   }

  if(!query&&!query2&&query1){
    req1.open('GET', URL + "director=" + query1, true);
         req1.addEventListener("load", function() {
         response = JSON.parse(req1.responseText);
	       console.log(response);
         });
         req1.send(null);
         res.send(response); //RESULT
   }


  if(!query1&&!query2&&query){
    req1.open('GET', URL + "actor=" + query, true);
         req1.addEventListener("load", function() {
         response = JSON.parse(req1.responseText);
	       console.log(response);
         });
         req1.send(null);
         res.send(response);
  }


  if(query&&query1&&query2){
         req1.open('GET', URL + "actor=" + query + "&director=" + query1 + "&title=" + query2, true);
         req1.addEventListener("load", function() {
         response = JSON.parse(req1.responseText);
	       console.log(response);
         });
         req1.send(null);
         res.send(response);
   }


   if(!query&&!query1&&!query2){
    res.send("ENTER SOME VALUE"); // ALL THREE FIELDS ARE EMPTY
   }

});

module.exports = router;
