var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a Ninja.');
});

app.get('/nickname', function(request, response){
    response.send('splendid-wolverine');
});

app.listen(process.env.PORT || 4000);