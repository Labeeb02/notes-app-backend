const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    tags:{
        type:String,
        trim:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
});


const Task=mongoose.model('Task', taskSchema);
 
module.exports=Task;