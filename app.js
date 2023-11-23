const express = require("express");
const tasks = require('./routes/task')
const {connectDB} = require('./db/connect')
require('dotenv').config()
const app = express();
const port = 5000;

//middleware 
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks);

app.get('/hello',(req,res)=>{
    res.send('Task Manager App');
});


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`);
        })
    }
    catch(error){
        console.log(error);
    }
}
start()