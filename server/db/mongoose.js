var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
var url=process.env.DATABASEURL
console.log(process.env.DATABASEURL);
mongoose.connect(url)

module.exports={mongoose};