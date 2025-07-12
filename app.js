// setup
const express = require("express")
// activate the app variable to be an express server
const app = express()
// start the web server
app.listen(3000, function() {
    console.log("Listening on port 3000")
})
// making an api using routes