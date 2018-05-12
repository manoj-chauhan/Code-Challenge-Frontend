import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import GridListExampleSimple from './GridListExampleSimple';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';



const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Application extends Component {
  render() {
    return (
      <div style={{ paddingTop: 56 }}>
          <AppBar style={{ position: 'fixed', top: 0 }} />
          <div style={{ position: 'relative'}}>
              <img style={{ width: '100%' }} src={ require('./images/banner.jpeg') } />
              <Tabs>
                  <Tab label="Item One" >
                      <div>
                          <h2 style={styles.headline}>Tab One</h2>
                          <p>
                              This is an example tab.
                          </p>
                          <p>
                              You can put any sort of HTML or react component in here. It even keeps the component state!
                          </p>
                          <Slider name="slider0" defaultValue={0.5} />
                      </div>
                  </Tab>
                  <Tab label="Item Two" >
                      <div>
                          <h2 style={styles.headline}>Tab Two</h2>
                          <p>
                              This is another example tab.
                          </p>
                      </div>
                  </Tab>
                  <Tab
                      label="onActive"
                      data-route="/home"
                      onActive={handleActive}
                  >
                      <div>
                          <h2 style={styles.headline}>Tab Three</h2>
                          <p>
                              This is a third example tab.
                          </p>
                      </div>
                  </Tab>
              </Tabs>
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
