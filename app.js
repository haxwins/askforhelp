let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let port = 3000;

Post = require('./models/post');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect to Mongoose
mongoose.connect('mongodb://localhost/askforhelp');
let db = mongoose.connection;

//requests
app.get('/connectioncheck', (req, res) => {
	res.send('Server is working');
});
//getting all posts
app.get('/posts', (req, res) => {
	Post.getPost((err, post) => {
		if (err) {
			console.log("err");
		}
		res.json(post);
	})
});

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.post('/post/:subject/:title/:postText', (req, res) => {
	let newPost = {
		date: new Date(),
		subject: req.params.subject,
		title: req.params.title,
		postText: req.params.postText,
		comments: []
	}
	Post.addPost(newPost, (err, newPost) => {
		if (err) {
			throw err;
		}
		res.json(newPost);
	})
});
//adding new comment
app.post('/comment/:_id/:comment',(req,res)=>{
	let id = req.params._id;
	let newComm = req.params.comment;
	Post.addComm(id, newComm, {}, (err, newComm) => {
		if(err){
			throw err;
		}
		res.json(newComm)
	});
})

app.listen(port);
console.log('running on port ' + port + '...');
