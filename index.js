const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

// const router = require('./routes.js')
const app = express();
app.set('port',3000);
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})

app.use('/courses', function (req,res){
  const url = 'http://payment:3003/courses'
  request(url).pipe(res)
})

app.use('/description', function (req,res){
  const url = 'http://description:3001/description'
  request(url).pipe(res)
})

app.use('/feedback', function (req,res){
  const url = 'http://feedback:3002/feedback'
  request(url).pipe(res)
})

app.use('/compare', function (req,res){
  const url = 'http://compare:3004/compare'
  request(url,{qs:req.query}).pipe(res)
})

app.use('/load', function (req,res){
  const url = 'http://expanded:3005/load'
  request(url).pipe(res)
})

app.listen(3000,()=> console.log(`listening on port ${3000}`))