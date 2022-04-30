const mongoose = require("mongoose");

module.exports.connect = (url) => mongoose.connect(url)
    .then((connnection) => console.log(`'${process.env.NODE_ENV}' db connection established successfully`))
    .catch((err) => console.log("DB Connection break " +err.message))