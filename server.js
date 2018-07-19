const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/api/whoami', (req, res) => {
  res.json({
    'ipaddress': req.ip,
    'language': req.get('Accept-Language'),
    'software': req.get('User-Agent')
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));