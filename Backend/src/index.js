const express = require('express')
const app = express();
require('dotenv').config();
const main =  require('./config/db')





app.use(express.json());




const InitalizeConnection = async ()=>{
    try{

        await Promise.all([main()]);
        console.log("DB Connected");
        
        app.listen(process.env.PORT, ()=>{
            console.log("Server listening at port number: "+ process.env.PORT);
        })

    }
    catch(err){
        console.log("Error: "+err);
    }
}


InitalizeConnection();
