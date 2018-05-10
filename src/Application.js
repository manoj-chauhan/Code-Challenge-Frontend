import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import GridListExampleSimple from './GridListExampleSimple';
import TextFieldExampleSimple from './TextFieldExampleSimple';

class Application extends Component {
  render() {
    return (
      <div>
      <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      <GridListExampleSimple/>
      <img src={ require('./images/image1.jpeg') } />
      <TextFieldExampleSimple/>
      </div>
    );
  }
}

export default Application;
