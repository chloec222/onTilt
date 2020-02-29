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

app.get("/", (req, res) => {
  res.render("landing", { layout: "main2" });
});

app.get("/landing", (req, res) => {
  res.render("landing", { layout: "main2" });
});

// app.get("/signup", (req, res) => {
//   res.render("schedule", {});
// });

// app.get("/login", (req, res) => {
//   res.render("dash", {});
// });

// ==============self route======================

app.get("/home", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("landing", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/schedule", function(req, res) {
  res.render("schedule");
});

app.get("/newmain", function(req, res) {
  res.render("newmain", { layout: "main" });
});

app.get("/newusers", function(req, res) {
  res.render("newusers", { layout: "main" });
});

app.get("/newbets", function(req, res) {
  res.render("newbets", { layout: "main" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { layout: "main2" });
});

app.get("/login", (req, res) => {
  res.render("login", { layout: "main2" });
});

app.get("/bet", (req, res) => {
  res.render("bet", {});
});

app.get("/dash", (req, res) => {
  res.render("dash", {});
});

// ================back to home==========================

app.get("/schedule", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/dash", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/bet", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/login", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/home", (req, res) => {
  res.render("home", { layout: "main" });
});

app.get("/signup", (req, res) => {
  res.render("home", { layout: "main" });
});

// =========================CSS ROUTE CALL CODE====================================

// Tell our app to send the "hello world" message to our home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
