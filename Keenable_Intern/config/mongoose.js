const mongoose = require('mongoose');



// mongoose.connect('mongodb://127.0.0.1:27017/web_database');
mongoose.connect('mongodb+srv://brijeshk:brijeshk@cluster0.ztovedn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    dbName:"apply",
});

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('successfully connected to db');
});
