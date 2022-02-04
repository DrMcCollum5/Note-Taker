const express = require("express");

// const { clog } = require("./middleware/clog");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use() is middleware funciton
// app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup public folder for images, js, css
app.use(express.static("public"));

//ROUTES

//API
//require("./routes/apiroutes")(app);
app.use("/api", apiroutes);
app.use("/", htmlroutes);

// HTML
//require("./routes/htmlroutes")(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
