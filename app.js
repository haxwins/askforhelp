let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let port = 3000;

Post = require('./models/post');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/askforhelp');
let db = mongoose.connection;

//requests
app.get('/connectioncheck',(req, res)=>{
	res.send('Server is working');
});
//getting all posts
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
//adding new post
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
//adding new comment
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

app.listen(port);
console.log('running on port ' + port + '...');
