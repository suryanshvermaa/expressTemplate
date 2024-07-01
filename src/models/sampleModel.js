const mongoose=require('mongoose');

const sampleSchema=new mongoose.Schema({
    sample:{
        type:String,
        required:true
    }
})

const Sample=mongoose.model('Sample',sampleSchema);
module.exports=Sample;