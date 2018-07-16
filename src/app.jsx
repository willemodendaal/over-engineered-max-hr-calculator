import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, NavLink, Route } from 'react-router-dom';

import Home from './home.jsx'
import About from './about.jsx'

class App extends React.Component {
    render() {
      return <div>
          <div id="top-menu">
            <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      ;
    }
  }

  ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('container')
  );
