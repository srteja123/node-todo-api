const {MongoClient,ObjectID} = require('mongodb');//this is same as above
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

  if(err){
    return console.log('Unable to connect')

  }
  console.log('connected');
//delete many
//db.collection('Todos').deleteMany({text: 'Ate dinner'}).then((result) =>{
//  console.log(result);

//});

//delete many
/**
 *
 db.collection('Todos').deleteOne({text: 'Ate lunch'}).then((result) =>{
  console.log(result);

 });

 */


//delete many
db.collection('Todos').findOneAndDelete({_id: new ObjectID("5a4d159633f7a717a88908ea")}).then((result) =>{
  console.log(result);

});
    //db.close();
  });
