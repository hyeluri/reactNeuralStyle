/* @flow */
import React from 'react';
import ReactDom from 'react-dom';
import {Route, Router, browserHistory} from 'react-router'

import AppComponent from './Routes';
import UploadComponent from './UploadComponent';

ReactDom.render(
  <Router history={browserHistory}>
    {AppComponent}
  </Router>,
  document.getElementById('app')
);
