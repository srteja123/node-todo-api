const {MongoClient,ObjectID} = require('mongodb');//this is same as above
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

  if(err){
    return console.log('Unable to connect')

  }
  console.log('connected');
  db.collection('Todos').find().count().then((count) =>{
console.log(`Todos ${count}`);
//console.log(JSON.stringify(docs,undefined, 2));
},(err) =>{
      return console.log("failed");
    });
    //db.close();
  });
