const mongoose=require('mongoose');
require('dotenv').config();

exports.dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL)
       console.log('db connected successfully');
    } catch (error) {
        console.log('err in db connection');
    }
}