/* */
import express from 'express';
import template from './template';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';

import routes from '../src/AppComponent';

const app = express();

app.use(express.static('public'));

app.use('/', function(req, res, next) {

  console.log(req.url, req.path);

  match({routes, location: req.url || req.path}, (err, redirectLocation, renderProps) => {
    if (renderProps) {
      const html = renderToString(<RouterContext {...renderProps} />);
      res.send(template(html));
    } else {
      next();
    }
  })

});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

app.get('/neural', function(req, res) {
  const html = '';
  res.send(template(html));
});
