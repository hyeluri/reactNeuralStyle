import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router'


import AppComponent from './AppComponent';

ReactDom.render(
  <Router history={browserHistory}>
    {AppComponent}
    <Route ""></Route>
  </Router>,
  document.getElementById('app')
);
