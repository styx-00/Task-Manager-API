const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    userFindAndModify: false,
    userUnifiedTopology: true
})
}

module.exports = {connectDB}