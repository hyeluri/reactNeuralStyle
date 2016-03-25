import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router'
import x from './AppComponent'


import AppComponent from './AppComponent';

ReactDom.render(
  <Router history={browserHistory}>
    <AppComponent />
  </Router>,
  document.getElementById('app')
);
