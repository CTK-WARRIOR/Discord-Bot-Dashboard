const http = require('http');
const settings = require("./settings.json")
const express = require('express');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', async (req, res) => {
  res.render('index', { bot: settings.website });
});

app.get("/commands", (req, res) => {
  res.render('commands');
})


const listener = server.listen(8000, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
