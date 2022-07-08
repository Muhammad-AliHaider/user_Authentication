const mongoose = require("mongoose")

const schema =new mongoose.Schema({
Username:{
    type:String,
    required:true
},
Password:{
    type: String,
    required: true
},
Email:{
    type: String,
    required : true
},
// Token:{
//     type:String,
// }
})
module.exports = mongoose.model("user",schema)