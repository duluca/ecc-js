/**
 * Created by doguhanuluca on 1/16/16.
 */
'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
    var result = {
        data: [1,2,3,5,8,13]
    }

    res.send(result);
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
})