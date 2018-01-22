var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Post = require('./models/post');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/askforhelp');
var db = mongoose.connection;

app.get('/',(req, res)=>{
	res.send('Heello');
	
});

app.get('/posts', (req, res)=>{
	Post.getPost((err,post)=>{
		if(err){
			console.log("err");
		}
		res.json(post);
	})
});

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.post('/',(req,res)=>{
	let newPost = req.body;
	newPost.date = new Date();
	newPost.comments = [];
	Post.addPost(newPost, (err, newPost) => {
		if(err){
			throw err;
		}
		res.json(newPost);
	})
});

app.post('/comment/:_id',(req,res)=>{
	console.log(req.params._id);
	console.log(req.body.comment);
	let id = req.params._id;
	let newComm = req.body.comment;
	Post.addComm(id, newComm, {}, (err, newComm) => {
		if(err){
			throw err;
		}
		res.json(newComm)
	});
})

app.listen(3000);
console.log('running on port 3000...');