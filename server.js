var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a Ninja.');
});

app.listen(process.env.PORT || 4000);