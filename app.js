var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Post = require('./models/post');

//mongod db connection
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
//end of mongodb connection

app.get('/',(req, res)=>{
	res.send('Heello');
	
});

app.get('/posts', (req, res)=>{
	Post.getPost((err,post)=>{
		if(err){
			console.log("err");
		}
		console.log(post);
		res.json(post);
	})
});

app.get('/xd', (req, res)=>{
	res.send('dziala xd');
});

app.listen(3000);
console.log('running on port 3000...');