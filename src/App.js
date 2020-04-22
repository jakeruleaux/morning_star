import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router";
import Splash from './Splash';
import Footer from './Footer';
import Admin from './Admin';


function App() {
  return (
    <Router>
      <div>
      <Splash />
      <Footer />
      <Switch>
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
