/* @flow */
import React, {Component} from 'react';
import {Route, Link, route} from 'react-router';
import UploadComponent from './UploadComponent';

type Props = {
  children: ReactClass;
};

class Root extends Component<void, Props, void> {
  render() {
    return (
      <div>
        <div>React boiler plate!!!!</div>
        <ul>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default (<Route path="/" component={Root}>
                  <Route path="upload" component={UploadComponent}/>
                </Route>
);
