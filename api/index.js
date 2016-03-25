import express from 'express';
import template from './template';
import React from 'react';
import ReactServer from 'react-dom/server';
import {RouterContext} from 'react-router';

import App from '../src/AppComponent';

const app = express();

app.use(express.static('public'));

app.use('/', function(req, res) {
  const html = ReactServer.renderToString(
    <RouterContext path={req.path}>
      <App />
    </RouterContext>
  );
  res.send(template(html));
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

app.get('/neural', function(req, res) {
  const html = ReactServer.renderToString(<App />);

  res.send(template(html));
});