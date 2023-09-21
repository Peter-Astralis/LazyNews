const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://master:10101010@apilazynews.gqefyrv.mongodb.net/?retryWrites=true&w=majority" )




   

    console.log('Mongodb Success');




mongoose.promise = global.promise;
module.exports = mongoose;