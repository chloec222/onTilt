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
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      section: function(name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
    }
  })
);
// Use handlebars to render
app.set("view engine", "handlebars");


// app.get("/blog", renderBlog);
// router.get('/', renderBlog);

// // Handlebars helper for / and blog routes
// function renderBlog(req, res) {
//   var query = {};
//   if (req.query.author_id) {
//     query.AuthorId = req.query.author_id;
//   }
//   db.Post.findAll({
//     where: query,
//     include: [db.Author]
//   }).then(function (posts) {
//     res.render('blog', { posts: posts })
//   });

// Handlebars: 'home.hbs' with '/games' display
app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/schedule", function(req, res) {
  res.render("schedule");
});

// Handlebars: 'bid.hbs' for placing a bid on a game
app.get("/bid", (req, res) => {
  res.render("bid", {});
});

// Handlebars: 'user.hbs' for creating new user
app.get("/user", (req, res) => {
  res.render("user", {});
});


// Handlebars: 'dashboard.hbs' for account profile
app.get("/dashboard", (req, res) => {
  res.render("dashboard", {});
});

// Handlebars: 'signup.hbs' for signing up
app.get("/signup", (req, res) => {
  res.render("signup", {});
});

// Handlebars: 'login.hbs' for logging in
app.get("/login", (req, res) => {
  res.render("login", {});
});

// Handlebars: 'user.hbs' to go back to home.hbs
app.get("/user", (req, res) => {
  res.render("/", {});
});

// Handlebars: 'bid.hbs' to go back to home.hbs
app.get("/bid", (req, res) => {
  res.render("/", {});
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

// =================================================================================

// setting initial port or port 8080
var PORT = process.env.PORT || 4000;
var db = require("./models");
require("./routes/bets")(app);
require("./routes/users")(app);

// require("./routes/viewsRoutes")(app);

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
