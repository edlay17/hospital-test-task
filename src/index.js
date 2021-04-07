import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router, HashRouter
} from "react-router-dom";

import './index.css';
import App from './App';
import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import employeesTableReducer from "./features/employees-table/model/employees-table-reducer";
import employeeSingleReducer from "./features/single-employee/model/single-employee-reducer";


const theme = createMuiTheme();
let reducers = combineReducers({
    empl: employeesTableReducer,
    singleEmpl: employeeSingleReducer
});
let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <CssBaseline />
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                <App/>
              </ThemeProvider>
          </Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

