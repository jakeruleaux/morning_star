import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin/index';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Switch>
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
)    

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
