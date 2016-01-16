/**
 * Created by doguhanuluca on 1/16/16.
 */
'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})