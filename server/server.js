var express = require('express');
var bodyParser = require('body-parser');


var{mongoose} = require('./db/mongoose');
var {toDo} = require('./models/toDo');
var {User}= require('./models/User');


var app = express();

app.use(bodyParser.json());
app.post('/todos',(req,res) =>{
var todo = new toDo({
  text : req.body.text
})
 todo.save().then((doc) => {
   res.send(doc);
 },(e) =>{
res.status(400).send(e);
 })
});

app.listen(3000, () =>{
  console.log("Started on port 3000");
});
