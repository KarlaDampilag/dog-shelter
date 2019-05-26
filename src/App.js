import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Dogs from './components/Dogs';
import Dog from './components/Dog';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container main">
      <h2>Adopt the Perfect Pet</h2>
      <hr />
        <Switch>
          <Route path="/dogs/:slug" component={Dog} />
          <Route exact path="/dogs" component={Dogs} />
		  <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
