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
          <div style={{ position: 'relative'}}>
              <img style={{ width: '100%' }} src={ require('./images/banner.jpeg') } />
              <div style={{ position: 'absolute', top: 0, left: 0, margin: 'auto', right: 0, bottom: 0, height: '48px', width: '256px' }}>
              <TextField hintText="Hint Text"/>
              </div>
          </div>
        <GridListExampleSimple/>
      </div>
    );
  }
}

export default Application;
