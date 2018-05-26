

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  try{

    if(err){
      return console.log(`unable to connect to monogdb`, err);
    }
    console.log('Connected to Mongodb');
    // db.collection('Todos').find().toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //   console.log('unable to fetch todos',err);
    // });
    //
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //   console.log('unable to fetch todos',err);
    // });

    // db.collection('Todos').find({_id:new ObjectID('5b087cc3acc96c0b15b6fdee')}).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //   console.log('unable to fetch todos',err);
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    // },(err)=>{
    //   console.log('unable to get count for Todos', err);
    // });

    db.collection('Users').find({name:'Doron'}).toArray().then((docs)=>{
      console.log(`There are ${docs.length} users called 'Doron'`);
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('unable to get users');
    });

  }finally{
    //db.close();
  }

});
