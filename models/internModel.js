const mongoose = require("mongoose")

internSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email: {type:String, required:true, unique:true},
    mobile: {type:Number, required:true,unique:true,min:10, max:10 },
    collegeId: {type: mongoose.Schema.Types.ObjectId, ref:'college', required: true},
    isDeleted: {type:Boolean, default:false}

},{timestamps:true})

module.exports= mongoose.model("intern", internSchema)