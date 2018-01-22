const mongoose = require('mongoose');

// Post Schema

const postSchema = mongoose.Schema({
	date:{
		type: Date
	},
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

//Add post
module.exports.addPost = (newPost, callback) => {
	Post.create(newPost, callback);
}

//Add comment
module.exports.addComm = (id, newComm, options, callback) => {
	let query = {_id: id};
	let update = {
		$push: { comments: [newComm] },
		date: new Date()
	}
	Post.findOneAndUpdate(query, update, options, callback);
}