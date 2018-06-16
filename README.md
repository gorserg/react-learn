### Express server 

- Create `package.json` (with `npm init`) or use own
- Install express 
```
npm install express 
``` 
- Create `server.js` file with content
 
```
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
```
- Run server 
```
npm start
```
 
