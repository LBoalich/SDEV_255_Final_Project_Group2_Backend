// setup
const express = require("express")
// we have to use cors in order to host a front end and backend on the same device
var cors = require("cors")
// activate the app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()

// making an api using routes

// all requests that usually use an api start with /api
app.use("/api", router)
app.listen(3000)