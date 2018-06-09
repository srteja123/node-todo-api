//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');//this is same as above
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

if(err){
  return console.log('Unable to connect')

}

console.log('connected');
db.collection('Todos').insertOne({
text:'Nothing to do',
completed: true

},(err,result) =>{
  if(err){
    return console.log("failed");
  }
  console.log(JSON.stringify(result.ops,undefined,2))
});

db.collection('Users').insertOne({
name:'Ravi Teja',
age: 24,
location:'Hyderabad'
},(err,result) =>{
  if(err){
    return console.log("failed");
  }
  console.log(JSON.stringify(result.ops,undefined,2))
});
db.close();
});
