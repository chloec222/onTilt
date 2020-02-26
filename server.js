// =========================EXPRESS SERVER/ROUTE CALL CODE====================================
// telling node we are creating express server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Must appear AFTER var app = express() but before routes
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// =========================HANDLEBARS SERVER/ROUTE CALL CODE====================================
// require handlebars
var exphbs = require("express-handlebars");
// Use "main" as our default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// Use handlebars to render
app.set("view engine", "handlebars");

var games = [
  {
    title: "Game 1: ",
    desc: "NBA vs. NBA2",
    imgUrl:
      "https://fetalpulse.com/wp-content/uploads/2015/07/NBA-Game-Time1.png"
  },
  {
    title: "Game 2: ",
    desc: "NBA3 vs. NBA4",
    imgUrl:
      "https://blog.us.playstation.com/tachyon/2013/10/nba.jpg?fit=554,341"
  },
  {
    title: "Game 3: ",
    desc: "NBA5 vs. NBA6",
    imgUrl:
      "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2016-09/GT-web-sm.jpg?itok=kNuQGd23"
  }
];

userResults = [
  {
    id: 1,
    game: "GAME 1",
    bid: 80
  },
  {
    id: 2,
    game: "GAME 5",
    bid: 70
  },
  {
    id: 3,
    game: "GAME 3",
    bid: 90
  }
];

// Handlebars: 'home.hbs' with '/games' display
app.get("/", (req, res) => {
  res.render("home", { games: games });
});

// Handlebars: 'bid.hbs' for placing a bid on a game
app.get("/bid", (req, res) => {
  res.render("bid", {});
});

// Handlebars: 'game.hbs' for viewing single game
app.get("/game", (req, res) => {
  res.render("game", {});
});

// Handlebars: 'dashboard.hbs' for viewing single game
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {});
});

// Handlebars: 'signup.hbs' for viewing single game
app.get("/signup", (req, res) => {
  res.render("signup", {});
});

// Handlebars: 'login.hbs' for viewing single game
app.get("/login", (req, res) => {
  res.render("login", {});
});

// Handlebars: 'game.hbs' for viewing all games
app.post("/playbook", (req, res) => {
  res.render("playbook", {});
});

// Handlebars: 'userdisplay' for displaying all users and bets => will become a partial
app.get("/userResults", (req, res) => {
  res.render("userResults", {});
});

//Handlebars: post request 'bid.hbs'
app.post("/bid", (req, res) => {
  console.log(req.body);
});

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
app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
require("./routes/bets")(app);
require("./routes/users")(app);

// express makes it possible for server to interpret the submitted data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(require('./routes'));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
