const express=require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors=require('cors');
const {dbConnect}=require('./src/dbConnection/db.js');
const testingRouter=require('./src/routes/testingRoute.js')
const app=express();

//db connection
dbConnect();

//middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//routes
app.use('/',testingRouter)


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})


