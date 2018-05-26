

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

  if(err){
    return console.log(`unable to connect to monogdb`, err);
  }
  console.log('Connected to Mongodb');


  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },
  // (err,result)=>{
  //   if(err){
  //     return console.log(`unable to insert to TodosApp`, err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined,2));
  // });
  // 
  // db.collection('Users').insertOne({
  //   name: 'Doron',
  //   age: 25,
  //   location: 'New Jersey'
  // },(err,result) =>{
  //     if(err){
  //       return console.log('unable to insert user to Users');
  //     }
  //     console.log(JSON.stringify(result.ops, undefined,2));
  // });

  db.close();
});
