var util = require('util'),
    express = require('express'),
    http = require('http'),
    pub_dir = 'public',
    socket = require('./lib/socket.js'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

if (pub_dir[0] !== "/") {
  pub_dir = "/" + pub_dir;
}

pub_dir = __dirname + pub_dir;

app.configure(function() {
  app.set("views", __dirname + "/views/");
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.query());
  app.use(app.router);
  app.use(express["static"](pub_dir));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  return app.use(function(err, req, res, next) {
    console.error(err.stack);
    return res.send(500, "An unexpected error occurred! Please check logs.");
  });
});


io.sockets.on('connection', socket);

module.exports.app = app

server.listen(3000);

util.log("Express server instance listening on port " + 3000);

require("./lib/routes");




