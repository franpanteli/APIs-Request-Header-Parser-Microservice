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

/*
	Uses of the .use method: 
		-> The .use method is used twice throughout this JavaScript file
		-> This section explains those use cases 
		-> We are using the .use method to mount middleware functions 
		-> These functions have access to three things: 
			-> The request object from the client to the server
			-> The response object from the server to the client 
			-> The next middleware function in the request-response cycle 
		-> They are functions which can be called in between when the client makes the request and when the 
        server makes the response -> functions which can be used on the request and response object before 
        the transfer of information is fully completed 
		
	app.use(cors({ optionSuccessStatus: 200 }));
		-> We are using cors middleware functions in the Express application 
		-> The argument in this is a configuration object which tells the application how CORS should behave 
		-> We are telling the CORS middleware that the preflight request is successful if the HTTP response status 
        code is 200
		-> This signals that the request is safe to send 
		-> We are using the CORS middleware in the Express application -> telling it how to handle preflight requests 
        (that a status code of 200 is considered a successful response)

	app.use(express.static('public'));
		-> We are mounting another middleware function in Express 
			-> This is why we are using the .use method 
			-> This is the second time this JavaScript file uses it 
		-> We have embedded the use of a .static method inside one of these
		-> This is a built-in Express middleware function 
		-> We are looking in the `public` directory in the server and sending static files as response objects back to 
      the client which made the call 
		-> `app` is the variable which stores the instance of the Express app we previously defined 
		-> Using the .use method on this sets up middleware for it 
		-> Then we are using the .static method to serve the client the files in the `public` directory stored on the server   	 
		-> The client requests a static file -> this then tells Express to look in the `public` directory in that server for 
      the static file to serve 
*/

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
