let express = require('express');
let app = express();

let cors = require('cors')
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/whoami', function(req, res) {
  res.json({"ipaddress": req.ip, "language": req.get('Accept-Language'), "software": req.get('user-agent')});
})

app.use(function(req, res) {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
})

let listener = app.listen(process.env.PORT, function() {
  console.log('app is listening on port ' + process.env.PORT)
})
