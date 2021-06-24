const mongoose=require('mongoose');


const PostSchema=mongoose.Schema({
 username:{
     type:String,
     required:true
 },
 email:{
     type:String,
     required:true
 },
 password:String,
});

module.exports=mongoose.model('Rest', PostSchema);