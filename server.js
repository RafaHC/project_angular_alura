'use strict';
const http = require('http'),
      app  = require('./config/express'),
      db   = require('./config/database'),
      //verifica porta
	  port = Number(process.env.PORT || '3000');

http.createServer(app).listen(port, function() {
    console.log('Servidor rodando na porta: ' + port);
});

