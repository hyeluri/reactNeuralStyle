/* @flow */
import React, {Component} from 'react';
import {Route, Link, route} from 'react-router';

export default class UploadComponent extends Component<void, void, void> {
  render() {
    return (
      <div>
        <div>Upload Component</div>
        <input type='file' accept='.png,.jpg' name='sourcePic'></input>
        <img id='sourcePreview'/>
      </div>
    );
  }
}
