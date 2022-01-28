const express = require("express");
const app = express();


// Sets an initial port.
const PORT = 3000

// Sets up the Express app to handle data parsing
// app.use() is middleware funciton

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup public folder for images, js, css
app.use(express.static('public'));


//ROUTES

//API 
require("./routes/apiroutes")(app);

// HTML 
require("./routes/htmlroutes")(app);



// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () =>  console.log("App listening on PORT: " + PORT));
