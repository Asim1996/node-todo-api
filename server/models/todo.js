var mongoose=require('mongoose');
var Todo=mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength: 1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	},
	_creator:{
		type:mongoose.Schema.Types.ObjectId,
		required:true
	}
});
// we are not setting "user Id" ObjectId
// it just means it is going to be an objectId
// It's our queries that ensure the correct _creator value is provided
module.exports={Todo};
