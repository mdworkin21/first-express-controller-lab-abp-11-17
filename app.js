var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controller/SiteController")

// Routes
app.get("/", SiteController.Index)

module.exports = app
