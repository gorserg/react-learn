var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static('public'));

app.get('/api/version', function (req, res) {
    const packageInfo = require('./package');
    res.json({ "version" : packageInfo.version, "author" : packageInfo.author});
});

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString(), "param" : req.query.id });
});

app.get('/api/data', function (req, res) {
    res.json(require("./data/fakeData"));
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});