const express = require('express');
var app = express();

app.use("/",express.static("webapp")); 
//this is load the broswer and give the Welcome page details 
app.get("/", (req,res) => {
   res.send("Welcome to My Website"); 
});

app.get("/home",(req,res) =>{
    res.send("<label>What is your name</label><input><br><button>Click Me</button>");
});
this.vendor = { "vendor": 
[ 
{
    "name"  : "Bhavik1",
    "id"    : "101",
    "email" : "abc@abc.com"            
},
{
    "name"  : "Real",
    "id"    : "102",
    "email" : "ajack@abc.com"            
},
{
    "name"  : "Artificial",
    "id"    : "102",
    "email" : "artifical@abc.com"            
}

]}

app.get("/vendor",(req,res)=>{
    res.json(this.vendor);
});

// app.get("/index.html",(req,res)=>
// // We use Dirname to use NODPROJECt folder otherwise it pick from C drive
// {
//     res.sendFile(__dirname + "/webapp/index.html");
// });


// This will start the server 3000 on browser
console.log("Your Server is started on http://localhost:3000");
const portno = process.env.PORT || 3000;
app.listen(portno);
