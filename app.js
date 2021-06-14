//copied from https://www.youtube.com/watch?v=CsWoMpK3EtE by skg

//Create a nodejs expressjs REST API
const express = require('express');
//setup our application
const app = express()

//going to define "root api endpoint" which will return hello world when we hit the api endpoint
app.get('/', (req,res) => res.send('hello world skg! chicken tandoori <br> I am great'));


//to start the server
app.listen(3000, () => {
	console.log('My REST API running on port 3000!');
})
