var mongoose    =   require("mongoose");
mongoose.connect('mongodb+srv://admin_piloto:%40dm1n2018@learnmongodbcluster-13tfl.azure.mongodb.net/test', { useNewUrlParser: true });

// create instance of Schema
var mongoSchema =   mongoose.Schema;

// create schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);