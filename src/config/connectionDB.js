var mongoose = require('mongoose');
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })


const connect = async () => {
    const Db = await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWD}@cluster0.3sx94.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

}

module.exports = {connect}
