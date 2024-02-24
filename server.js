let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  res.json({
    "ipaddress": req.ip,
    "language": req.get('Accept-Language'),
    "software": req.get('user-agent')
  });
});

app.use(function (req, res) {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
});

// Use a default port if process.env.PORT is not available
const port = process.env.PORT || 3000;
let listener = app.listen(port, function () {
  console.log('app is listening on port ' + port);
});
