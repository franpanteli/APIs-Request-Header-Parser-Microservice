/*
	-> This section of the code defines the variables which are used throughout the project server.js file 
	There are three of these variables 
		-> The first imports the Express module into the project
		-> The second sets up an Express object using this module 
		-> The third imports the cors module 
			-> This pertains to secure communications when interacting with application middleware

	In more technical detail: 
		-> We are using the require Node.js method to do this 
		-> We are importing the module dependencies 
		-> We are using the features of this library 
		-> The first variable is importing the Express library 
			-> This is stored in `express`
		-> The second variable is setting up an express application
			-> This is set in the variable called `app`
			-> This is an instance of an Express application 
			-> It knows how to make this from the module import which the previous variable made 
			-> This is the app which we are writing the middleware into for the project 
		-> The third line 
			-> Whenever require is used <- this is how we import a module in JavaScript 
			-> This is set equal to a variable 
			-> And the functions and libraries which we are importing belong to Node.js 
			-> CORS is CORS (Cross-Origin Resource Sharing) 
				-> This is used for the middleware in the application 
				-> This restricts web applications running at one origin when requesting resources from a different 
          origin
*/

let express = require('express');
let app = express();
let cors = require('cors');



app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api/whoami', function (req, res) {
  res.json({
    "ipaddress": req.ip,
    "language": req.get('Accept-Language'),
    "software": req.get('user-agent')
  });
});


app.use(function (req, res) {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
});

// Use a default port if process.env.PORT is not available
const port = process.env.PORT || 3000;
let listener = app.listen(port, function () {
  console.log('app is listening on port ' + port);
});
