import React from 'react';
import Admin from './Admin/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './Splash';
import Footer from './Footer';

function App() {

  const Routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  )    
  

  return (
    <Router>
      <div>
        <Route exact path="/" component={Splash} />
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
