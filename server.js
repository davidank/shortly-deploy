var app = require('./server-config.js');
// testing automative deployment with git with a VPS
var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
