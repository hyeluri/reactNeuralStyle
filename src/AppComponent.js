import React, {Component} from 'react';
import {Route, Link} from 'react-router';


class App extends Component {
  render() {
    return <button onClick={() => route.go('/edit')} activeClassName="">Hello Harish</button>;

  }
}

export function AppComponent() {
  return <Route path="/" component={App}>
      <Route path="edit" component={EditList}>
        <Route path="/:id" component={EditID}>
        </Route>
      </Route>
  </Route>;
}

//export function AppComponent() {
//  return React.createElement(Route, {path: '/', component: App},
//    React.createElement(Route, {path: 'edit', component: EditList},
//      React.createElement(Route, {path: '/:id', component: EditID})
//    )
//  )
//}
//
//
//export default (
//    <Route path="/" component={App}>
//      <Route path="edit" component={EditList}>
//        <Route path="/:id" component={EditID}>
//        </Route>
//      </Route>
//    </Route>
//)

