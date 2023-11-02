const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must Provide A Task Name"],
        trim:true,
        maxlength:[20 , "Name cannot be above 20 words"]
    },
    completed:{
        type:Boolean,
        default:false
    },
    
})

module.exports = mongoose.model ('Task',TaskSchema)