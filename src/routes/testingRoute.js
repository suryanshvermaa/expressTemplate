const express =require('express');
const testingRouter=express.Router();
const {testing}=require('../controllers/testingController.js')

testingRouter
.get('/testing',testing)

module.exports=testingRouter;