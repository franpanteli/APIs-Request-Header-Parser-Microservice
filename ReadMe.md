# APIs-Request-Header-Parser-Microservice-Project

[Instructions on how to run the app locally are here](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project/blob/main/launching-the-app-locally.txt).

WRITE THIS LATER:
This repository contains my independent work for a request header parser microservice microservice project, created with JavaScript as part of my [second project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice) in freeCodeCamp's [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) curriculum. This involved the development of a Node.js and Express.js web application. The problem-solving approaches I used to develop this are detailed in depth in the [project server.js file](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project/blob/main/server.js). This project focuses on parsing and extracting essential information from client request headers, including IP address, language preferences, and software details. It incorporates security measures such as Cross-Origin Resource Sharing (CORS) middleware for secure cross-origin communication. Additionally, the project enhances user experience by serving static files and gracefully handling 404 errors through a dedicated middleware function.

## Microservice Installation & Usage

This microservice can be installed and run locally. First, clone this repository with `git clone https://github.com/franpanteli/APIs-Timestamp-Microservice-Project.git`, navigate to the project directory with `cd`, and install dependencies using `npm install`. Run the server with `npm start` and open the application in a web browser at `http://localhost:3000`.

## API Endpoints

The project defines two main API endpoints. The first, `/api`, responds to a GET request with the current timestamp in both Unix and UTC formats. The second, `/api/:date_string`, handles user-entered date strings, validating the format and responding with Unix and UTC timestamps accordingly. Error handling has also been implemented for invalid date strings.

## Examples

- To retrieve your current timestamp, visit `http://localhost:3000/api`.
- To handle a user-entered date (e.g., "2022-03-25"), visit `http://localhost:3000/api/2022-03-25`.

## Dependencies

The project relies on [express](https://www.npmjs.com/package/express) and [cors](https://www.npmjs.com/package/cors).







Certainly! Here's a description for your project:

"The primary objective of this project, the 'Request Header Parser Microservice,' is to offer comprehensive functionalities for parsing and extracting information from client request headers. The application is designed to handle HTTP GET requests and provide crucial details such as IP address, preferred language, and software details. Key features include:

Header Parsing: The application parses client request headers to extract essential information, including the client's IP address, preferred language, and software details.

API Endpoint for Client Information: The project provides a dedicated API endpoint (/api/whoami) where users can make GET requests to obtain a JSON response containing their IP address, language preferences, and software information.

CORS Middleware: To ensure secure cross-origin communication, the project incorporates Cross-Origin Resource Sharing (CORS) middleware. This middleware handles preflight requests, enhancing the security of cross-origin connections.

Static File Serving: Utilizing the Express.js express.static middleware, the application serves static files from the 'public' directory. This includes HTML, CSS, and client-side scripts, enhancing the overall user experience.

Error Handling: The project includes a middleware function to handle 404 errors gracefully. In case a user attempts to access a route that doesn't exist, an error HTML page is served, providing a user-friendly message about the resource not being found.

The 'Request Header Parser Microservice' is built on Node.js and Express.js, showcasing a robust and well-organized structure. The project not only fulfills the functional requirements of parsing headers but also prioritizes security and user experience through middleware implementations and error handling mechanisms."

Feel free to customize it according to specific details or additional functionalities in your project.













This repository contains a full-stack JavaScript app named "Request Header Parser Microservice," developed as part of the freeCodeCamp Back End Development and APIs curriculum. The app provides functionality to parse and retrieve information about the client's request headers, such as IP address, preferred language, and software details.

Project Overview
Project Name: Request Header Parser Microservice
Live App URL: https://spectacular-pest.glitch.me/
GitHub Repository: Request Header Parser Microservice GitHub
Usage
To use the app, make a GET request to the following URL:

https://spectacular-pest.glitch.me/api/whoami
Example Output:
json
Copy code
{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
Local Installation & Usage
Prerequisites
Node.js installed on your machine.
Steps
Clone Repository:

bash
Copy code
git clone https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project.git
cd APIs-Request-Header-Parser-Microservice-Project
Install Dependencies:

bash
Copy code
npm install
Run the Server:

bash
Copy code
node server.js
Access the Local App:
Open your web browser and go to http://localhost:3000.

Test the API Endpoint Locally:
Open a new tab in your browser or use a tool like curl or Postman to visit:
http://localhost:3000/api/whoami
You should receive a JSON response containing information about the client (IP address, language, and software).

Project Structure
index.html
The HTML file contains the structure of the web page, providing details about the Request Header Parser Microservice, its usage, and example output.

server.js
The main server file written in Node.js and Express.js. Here's a brief overview of its sections:

Import Dependencies:

express: The Express.js library for building the web application.
cors: Cross-Origin Resource Sharing middleware for secure cross-origin communication.
Middleware Setup:

app.use(cors({ optionSuccessStatus: 200 }));: Configures CORS middleware to handle preflight requests successfully.

app.use(express.static('public'));: Serves static files from the 'public' directory.

Route Handlers:

app.get('/'...): Handles requests to the root directory, serving the index.html file.

app.get('/api/whoami'...): Handles requests to '/api/whoami', responding with a JSON object containing client information.

app.use(function (req, res) {...});: Middleware for handling 404 errors, serving an error HTML page.

Server Configuration & Start:

const port = process.env.PORT || 3000;: Assigns a port for the application to listen on.

let listener = app.listen(port, function () {...});: Starts the server and logs a message to the console upon successful initiation.

Project Author
Author: Fran Panteli
GitHub: Fran Panteli GitHub
Feel free to explore the live app, clone the repository, or reach out to the author for any questions or improvements!



