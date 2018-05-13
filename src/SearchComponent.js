import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import GridListExampleSimple from './GridListExampleSimple';
import MyFancyComponent from './MyFancyComponent';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';


function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class SearchComponent extends Component {
  render() {
    return (
      <div style={{ paddingTop: 56 }}>
          <AppBar style={{ position: 'fixed', top: 0, backgroundColor: '#00000000'}} />
          <MyFancyComponent/>
          <GridListExampleSimple/>
      </div>
    );
  }
}

export default SearchComponent;
