
const express = require("express")
const bodyParser = require("body-parser");
const date = require(__dirname + "/newModule.js");

let today = date();

const app = express();
// Assuming your CSS files are in the "public" folder

app.set("view engine","ejs");
// important if we want to ejs package downloaded from node.js and that this is the "view emgine"

app.use(bodyParser.urlencoded ( { extended :true }  ) );
app.use(express.static(__dirname));
  // json file serves views folder and app.js file only so linking files to list.ejs or app.js wont`t work so we need to tell
  //express explicitly to use it also if the path includes a .html file then the localhost might show that file instead of the 
  //list.ejs file so relocate it. 



var items = [];
//FOR GLOBAL SCOPE and we used an array so that multiple itenm additions can be shown

app.post("/" , function(req,res){

    var item = req.body.NewItem;

    items.push(item);

    //this is function was made just to get the NewItem value
    res.redirect("/");
    // redirect to home route so that the app.get can put the  value of item into the ejs  var (list) 
});


app.get("/",function(req,res){
// first this is called when we are at root page  which calls list.ejs file and provides value to the ejs vars.

res.render("list",{ khiladi : today , justInputted : items }  ); // use the "items" array not the "item" var
// this sends the value of the var today to the var khiladi (used in ejs file "list" as specified in first arg)  
});
// app.get is the function called to tell the broweser what to show on the home page (here) and khiladi var is define here but if the 
//the file that will be loaded hs a different var in it then seperte both vars (in res.render ) with a ','



app.listen(3000, function(){
console.log("server running on port 3000");
})


// when server starts listening this is logged to console














