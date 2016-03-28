import React, {Component} from 'react';
import {Route, Link, route} from 'react-router';


class App extends Component {
  render() {
    return (
      <div>React boiler plate!!!!</div>
    );
  }
}

{/*<Route path="edit" >
  <Route path="/:id" >
  </Route>
</Route>*/}

export default <Route path="/" component={App} />;
