import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import './order/order.css';
import App from './app';
import {OrderContainer} from './order/order-container';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/orders' exact>
          <OrderContainer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
