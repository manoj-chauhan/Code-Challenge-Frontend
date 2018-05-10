import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider>
    <Application />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
