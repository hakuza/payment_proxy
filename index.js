const express = require('express')
const request = require('request')
// const router = require('./routes.js')
const app = express();
app.set('port',3000);
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})

app.use('/courses', function (req,res){
  const url = 'http://localhost:3003/courses'
  request(url).pipe(res)
})

app.use('/description', function (req,res){
  const url = 'http://localhost:3001/description'
  request(url).pipe(res)
})

app.use('/feedback', function (req,res){
  const url = 'http://localhost:3002/feedback'
  request(url).pipe(res)
})

app.listen(3000,()=> console.log(`listening on port ${3000}`))