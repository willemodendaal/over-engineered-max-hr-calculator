import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import Calculator from '../presentational/calculator.jsx';
import About from '../presentational/about.jsx';
import Login from '../presentational/login.jsx';
import Secure from '../presentational/secure.jsx'

class App extends React.Component {
    render() {
      return ( 
        <div>
            <div id="top-menu">
              <NavLink to="/">Calculator</NavLink> | <NavLink to="/about">About</NavLink>
            </div>
            <Switch>
              <Route exact path='/' component={() => <Secure loggedIn={false}><Calculator/></Secure>} />
              <Route path='/login' component={Login} />
              <Route path='/about' component={About} />
            </Switch>
        </div>
      );
    }
  }

export default App;