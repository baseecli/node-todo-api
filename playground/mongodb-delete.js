

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  try{

      if(err){
        return console.log(`unable to connect to monogdb`, err);
      }
      console.log('Connected to Mongodb');

      //delete many
      // db.collection('Todos').deleteMany({text:'go to sleep'}).then((result) =>{
      //   console.log(result);
      // });

      //delete one
      // db.collection('Todos').deleteOne({test:'go to sleep'}).then((result)=>{
      //   console.log(result);
      // });

      //find delete
      // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
      //   console.log(result);
      // });

      // db.collection('Users').deleteMany({name:'Doron'}).then((result)=>{
      //   console.log(result.result);
      // })

      db.collection('Users').findOneAndDelete({_id:new ObjectID('5b088f58535755317d89615d')}).then((result)=>{
        console.log(result);
      });

  }finally{
    //db.close();
  }

});
