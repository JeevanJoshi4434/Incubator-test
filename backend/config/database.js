const mongoose = require('mongoose');


const connectdatabase = ()=>{

    mongoose.connect("mongodb+srv://jeevan:incubator%403@cluster0.hs9wuze.mongodb.net/Incubator?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true,
    }).then((data)=>{
        console.log(`Mongodb connected at: ${data.connection.host}`);
    })
    
};

module.exports = connectdatabase