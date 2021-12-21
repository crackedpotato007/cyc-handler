const mongoose = require('mongoose')
connect = async (string) => {
   await mongoose.connect(string, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     keepAlive: true,
     useFindAndModify: false,
   }, (err) => {
console.log(err)
   })
}
module.exports.connect = connect
