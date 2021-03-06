// Setup empty JS object to act as endpoint for all routes
let projectData = [];
let entId = 1;
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;
// Spin up the server
const server = app.listen(port, listening)
// Callback to debug
function listening(){
     console.log("server running");
     console.log(`running on localhost: ${port}`);
}
// Initialize all route with a callback function
app.get('/all', getData);
// Callback function to complete GET '/all'
function getData(req, res){
  res.send(projectData);
}
// Post Route
app.post('/addResponse', addResponse);

function addResponse(req, res){
  newEntry = {
    entId: entId,
    city: req.body.city,
    temp: req.body.temp,
    weather: req.body.weather,
    feelings: req.body.feelings,
    date: req.body.date
  }

  projectData.push(newEntry);
  res.send(projectData);
  entId++;
}
