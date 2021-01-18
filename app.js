const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require("./models");
const warehousesApiRouter = require('./routes/api/warehouses')

//INITIALIZE APP WITH EXPRESS
const app = express();

//BODYPARSER
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// API REST
warehousesApiRouter(app)


// redirect
app.get('/', function(req, res) {
  res.redirect(`/api/warehouses`)
});

// Sync Data Base
db.sequelize.sync();

// server
const server = app.listen(PORT, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
