const { createServer } = require("https");
var express = require("express");
const compression = require("compression");
const path = require("path");

var port = process.env.PORT || 5000;

var app = express();
const dev = app.get("env") !== "production";
if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(__dirname));

  app.use(express.static(path.resole(__dirname, "build")));

  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const server = createServer(app);

server.listen(port, err => {
  if (err) throw err;
  console.log("app running");
});
