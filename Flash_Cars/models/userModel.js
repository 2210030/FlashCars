const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
     username : {type:String , required: true},
     password : {type:String , required: true},
     firstName : {type: String, required: true},
     lastName: {type: String, required: true},
     isAdmin: { type: Boolean, default: false },
     isBlocked: { type: Boolean, default: false },
});

const userModel = mongoose.model('users' , userSchema);

module.exports = userModel;
