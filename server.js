import fs from 'fs';
import express from 'express';
import path from 'path';
import moment from 'moment';
import bodyParser from 'body-parser';

let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use('/:display_name', express.static('public'));
app.use('/:id', express.static('public'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => console.log('Listening on port', port));
