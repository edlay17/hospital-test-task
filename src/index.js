import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router, HashRouter
} from "react-router-dom";

import './index.css';
import App from './App';

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

