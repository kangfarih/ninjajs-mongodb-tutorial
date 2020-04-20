const express = require('express');

// set up express app
const app = express();

//listen for request
app.listen(8080, function(){
    console.log('now listening for requests');

});