const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/wilderdb", {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "MotDePasse",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    autoIndex: true,
})
.then(()=> console.log('Connected to db'))
.catch((err)=> console.log('err', err))