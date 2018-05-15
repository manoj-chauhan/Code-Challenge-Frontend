import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightTheme)}>
    <Application/>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
