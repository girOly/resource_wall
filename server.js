// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const methodOverride = require('method-override')
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'session',
  keys: ['thisisaverysecretkeyok'],
}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  if (!req.session.user_id) {
    return next();
  }
  const userQuery = `
  SELECT *
  FROM users
  WHERE id = ${req.session.user_id}
  `
  db.query(userQuery)
  .then((data) => {
    const user = data.rows[0]
    req.user = user;
    next();
    })
  .catch((err) => next(err))
});


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const resourcesRoutes = require("./routes/resources");
const categoryRoutes = require("./routes/categories")
const registerRoutes = require("./routes/register");
const loginRoute = require("./routes/login");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

app.use("/users", usersRoutes(db));
app.use("/resources", resourcesRoutes(db));
app.use("/categories", categoryRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/login", loginRoute(db));
app.get('/logout', (req, res) => {
  res.clearCookie('session');
  res.redirect('login');
});

app.get("/", (req, res) => {
  db.query(`
    SELECT *
    FROM resources
    ORDER BY id
    `)
  .then(data => {
    const allResources = data.rows;
    res.render("home",{allResources, user:req.user});
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  });
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
