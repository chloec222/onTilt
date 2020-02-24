// =========================EXPRESS SERVER/ROUTE CALL CODE====================================
// telling node we are creating express server
var express = require("express");
var app = express();




// =========================HANDLEBARS SERVER/ROUTE CALL CODE====================================
// require handlebars
var exphbs = require('express-handlebars');
// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// test server with home.handlebars
// Handlebars: Render the "home" layout for the main page and send the following msg
app.get('/', (req, res) => {
  res.render('home', { games: games });
})

var games = [
  { title: "Game 1: ", desc: "NBA vs. NBA2", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgd_jexdV0iueOz7y2AEYtFLMFOFDhaP9huX2N7qNGaaZn5-d7" },
  { title: "Game 2: ", desc: "NBA3 vs. NBA4", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgd_jexdV0iueOz7y2AEYtFLMFOFDhaP9huX2N7qNGaaZn5-d7" },
  { title: "Game 3: ", desc: "NBA5 vs. NBA6", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgd_jexdV0iueOz7y2AEYtFLMFOFDhaP9huX2N7qNGaaZn5-d7" }
]

// --[DEBUG]
// --games.handlebars => index
// app.get('/', (req, res) => {
//   res.render('games-index', { games: games });
// })



// =========================API ROUTE CALLS CODE====================================


// [DEBUG]
// telling express server where the API routes are located and act as a map that users will interact with when on app
// require("./routes/api/bets.js")(app); 
// require("./routes/api/html.js")(app); 
// require("./routes/api/index.js")(app); 
// require("./routes/api/users.js")(app); 
// require("./routes/routes.js")(app);


// =========================CSS ROUTE CALL CODE====================================

// Tell our app to send the "hello world" message to our home page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// =========================API ROUTE CALLS CODE====================================


// [DEBUG]
// telling express server where the API routes are located and act as a map that users will interact with when on app
// require("./routes/api/bets.js")(app); 
// require("./routes/api/html.js")(app); 
// require("./routes/api/index.js")(app); 
// require("./routes/api/users.js")(app); 
// require("./routes/routes.js")(app);


// =================================================================================


// setting initial port or port 8080
var PORT = process.env.PORT || 8080;
var db = require("./models");


// express makes it possible for server to interpret the submitted data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(require('./routes'));

// db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
