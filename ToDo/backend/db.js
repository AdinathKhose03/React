const mongoose = require("mongoose")
require('dotenv').config();

const MongoDB_URl = process.env.DB_URL

mongoose.connect(MongoDB_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection error', err));


const todoSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    completed:{type:Boolean, default:false}
})

const Model = mongoose.model('Model', todoSchema)

module.exports = {
    Model
}






