const express = require('express');
const connectDB = require('./src/Database/db')
const app  = express();

require('dotenv').config({
    path:'./src/config/.env'
});

const PORT = process.env.port||8080

const url = process.env.db_url

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("This is Home Route")
})
app.listen(PORT,async()=>{
    try{
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`)
        console.log('Database connected successfully')
    }
    catch(err){
        console.log(err)
    }
})