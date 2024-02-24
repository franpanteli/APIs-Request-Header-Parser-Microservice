# APIs-Timestamp-Microservice-Project
This repository contains my independent work for a timestamp microservice, created with JavaScript as part of my [first project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) in freeCodeCamp's [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) curriculum. This involved the development of a Node.js and Express.js web application. The problem-solving approaches I used to develop this are detailed in depth in the [project index.js file](https://github.com/franpanteli/APIs-Timestamp-Microservice-Project/blob/main/index.js). The primary goal of this project was to provide timestamp-related functionalities and to serve static files. The application features API endpoints for retrieving the current timestamp and handling user-entered date strings. Key features of this include a timestamp service offering Unix and UTC formats and user-entered date handling with validation. This project also uses Cross-Origin Resource Sharing (CORS) middleware for secure cross-connection, and static file serving for the "public" directory, to aid in serving HTML, CSS, and client-side scripts.

## Microservice Installation & Usage

This microservice can be installed and run locally. First, clone this repository with `git clone https://github.com/franpanteli/APIs-Timestamp-Microservice-Project.git`, navigate to the project directory with `cd`, and install dependencies using `npm install`. Run the server with `npm start` and open the application in a web browser at `http://localhost:3000`.

## API Endpoints

The project defines two main API endpoints. The first, `/api`, responds to a GET request with the current timestamp in both Unix and UTC formats. The second, `/api/:date_string`, handles user-entered date strings, validating the format and responding with Unix and UTC timestamps accordingly. Error handling has also been implemented for invalid date strings.

## Examples

- To retrieve your current timestamp, visit `http://localhost:3000/api`.
- To handle a user-entered date (e.g., "2022-03-25"), visit `http://localhost:3000/api/2022-03-25`.

## Dependencies

The project relies on [express](https://www.npmjs.com/package/express) and [cors](https://www.npmjs.com/package/cors).
