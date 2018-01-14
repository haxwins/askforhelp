const mongoose = require('mongoose');

// Post Schema
const postSchema = mongoose.Schema({
	subject:{
		type: String
	},
	title:{
		type: String
	},
	postText:{
		type: String
	},
	comments:{
		type: Array
	},
});

const Post = module.exports = mongoose.model('Post', postSchema);

// Get post
module.exports.getPost = (callback, limit) => {
	Post.find(callback).limit(limit);
}

