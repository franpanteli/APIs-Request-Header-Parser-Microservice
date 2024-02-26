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

/*
	Uses of the .get method:
		-> The client makes an GTTP get request to different directories in the server 
		-> This method is telling the server how to respond to these requests 
		-> This is referred to as route handling 
		-> Each of these two uses of the .get method are route handlers 
			-> We are telling the server how to respond to HTTP requests made to those directories 
			-> If the client makes a request for this directory on the server, this is what you do 
			-> And in this case we have two of them used in this, the main JavaScript file for the project 

	The first route handler:
		-> The arguments:
			-> The HTTP GET requests for this are made to the '/' directory on the server 
			-> To make these requests to the server, the client is sending the request (`req`) objects 
			-> The server then sends back the response (`res`) object to the client 
			-> The first argument is the relative path to the directory on the server which the route hander is 
        managing 
			-> The second argument is for the error function -> this is the function which we use for error handling 
        at the end of the request

		-> Serving the html file:
			-> The project has an index.html file -> this is stored on the server 
			-> We are instructing the server to send this file back to the client when the HTTP GET request is made to it 
			-> This is done using the .sendFile Express method 
				-> .app is the Express application from earlier in this document 
			-> res <- since this is the response object which the server is sending back 
			-> The server is responding back with the HTML file as an attachment 
			-> This argument to this function is the absolute path of the index.html file on the server
				-> This is the current directory (`__dirname`), combined with the relative path extension 
          '/views/index.html'
				-> The current directory (`__dirname`) is a global variable in Node.js

		-> The client makes an HTTP GET request to the root path 
		-> The server then responds by sending the HTML file for the project back 
		-> For that to happen, we are passing in the path to that file on the server as its argument 
		-> This then gets sent back ('served')

	The second route handler:
		-> This is the route handler which serves the files stored in the '/api/whoami' directory on the server 
		-> The client makes HTTP GET requests to this directory on the server 
		-> This JavaScript is telling the server what to do when these requests are made 
		-> We are using the Express .get method 
			-> app. <- this is the variable which stores the Express application 

		-> The arguments to this function: 
			-> The first is the path to the directory on the server where the call is made
			-> The second is the function for error handling -> the arguments of this are:
				-> `res` <- the response object which is sent from the server to the client 
				-> `req` <- the requested object which is sent from the client to the server when the HTTP GET request is 
            made 

		-> The response object which the server sends back to the client:
			-> We are using the res.json method <- we are sending a JavaScript (JSON) object back to the client who made 
          the GET request, from the server  
			-> This is the section of the JavaScript application where we send back the information about the user
			-> Each of the elements in this JSON object are pertaining to the user 
			-> The information is obtained using the .get method <- this returns the requested information in each of the 
          cases (the client IP address, client's language preferences and operating system)
				-> We are running this method on the req object -> because this is the request object which was sent by the client, 
            and contains this information about them 
				-> The .get method on this object, because this is what we use to send back information about something 

		-> The user sends an HTTP GET request 
		-> This reaches the server 
		-> This route handler tells the server to look into its '/api/whoami' path 
		-> The server responds with a JSON object because of this route handler 
		-> That JSON object gets sent back to the client -> which contains the information about them 
		-> That information was obtained by running the .get method on the request object which it sent to the server when 
        that request was initially made 
*/

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

/*
	A final use of the .use method:
		Middleware functions:
			-> This was the method we use to set up middleware for the function 
			-> This is executed for all routes 
			-> app <- this is the Express application 
			-> The arguments which this takes are req and res 
				-> The client makes a call to the server
				-> This sends the request (`req`) object to the server
				-> Then the server sends the response (`res`) object back to the client 
			-> Middleware functions are ones which target the object in between when the response object is sent from the 
          server to the client, or when the request object is sent from the client to the server 

		This is a route handler for error handling:
			-> We are telling the server to send back an error message
			-> This middleware function is executed for all routes 
			-> We are sending the HTTP status code of the response 404 <- this is the 'Not Found' response 
				-> The case that the client makes a request for a file which isn't on the server
				-> We are checking the status of that error message (the 404 error), using the .status method 
				-> We are checking this for the response object <- the one which the server sends back to the client 
			-> We then serve the HTML file with the error message
				-> The server is sending ('serving') the HTML file called error.html back to the client 
				-> The arguments of this function tell the server where to find the file to respond with 
				-> `__dirnmae` <- this is the global Node.js variable which contains the path to the current directory of the 
            script 
				-> error.html is the HTML page which is shown when there is an error message (the 404 error message) -> the HTML 
            file we're trying to otherwise serve to the client doesn't exist 
		
		-> This is a route handler for error handling 
		-> When the user tries to access a route which isn't on the server -> then this middleware function is triggered
		-> Instead of serving them the HTML file which would otherwise be shown, we are serving them the one with the error 
        message on it 
		-> Because this is for the case where the HTML file which we would otherwise want to serve doesn't exist on the server 
			-> This would correspond to a 404 error 
			-> The user is then being told that the requested resource wasn't found, and that they would be sent ('served') this 
        error.html file by the server 
*/

app.use(function (req, res) {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
});

// Use a default port if process.env.PORT is not available

/*
	Assigning the application a port to use: 
		-> Finally, we configure and start the server 
		-> The first line uses a port if the proccess.env.PORT is not available 
			-> We set a constant equal to `port`
			-> The pipe symbol || means if this default port isn't available, then use this one instead
			-> process.env.PORT <- this is an environment variable 
				-> The value of this can be set externally, assign 
a port to the application 
		-> The server is listening to the port specified by the process.env.PORT environment variable <- and if otherwise, the 
        server will listen to the `300` port 
	
	Telling the server to listen to the port we have assigned:
		Binding the server to the port: 
			-> let listener = app.listen(port, function () { ... });:
			-> We define a constant called `listener`
			-> `app` is instance of the Express application which we are telling to listen to this port  
			-> The method we are using for this is the .listen method 
			-> This is telling this application to listen to the given port <- we are in effect binding them together 

		The arguments of this are:
			-> The variable which stores the value of the port which we want to listen to -> this is the `port` variable 
			-> function <- this is the function which we use for error handling 
				-> When using JavaScript, the first arguments are often the ones which the section of code you are writing uses, and the 
            last is associated with error handling 

		When this code is executed, we log the message to the console: 
			-> We know the application is listening to the port 
			-> This is done using the console.log method
			-> We are printing the port number which the application is listening to when this code is ran <- by using the absolute 
          value of the `port` variable 
			-> This is how we know the server has been started successfully

		The callback function:
			-> We have defined a variable which tells the server / app to listen to a certain port for calls from the client 
			-> One of the arguments of this variable is an entire function 
			-> This is the callback function, `function`
			-> console.log <- this is setting this function 
			-> We are setting a variable telling the app to listen to a certain port <- and when this is executed, we will know because 
          the function is run
			-> There are two separate purposes - the first is to tell the app to listen to the port, and the second is to log that the 
          server is on and listening to the port <- via a function
			-> After we have told the server which port to listen to, we are then logging this to the console 
*/

const port = process.env.PORT || 3000;
let listener = app.listen(port, function () {
  console.log('app is listening on port ' + port);
});