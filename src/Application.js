import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import GridListExampleSimple from './GridListExampleSimple';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import TextField from 'material-ui/TextField';

class Application extends Component {
  render() {
    return (
      <div style={{ paddingTop: 56 }}>
          <AppBar style={{ position: 'fixed', top: 0 }} />
          <img src={ require('./images/banner.jpeg') } />
          <TextField hintText="Hint Text"/>
        <GridListExampleSimple/>
      </div>
    );
  }
}

export default Application;
