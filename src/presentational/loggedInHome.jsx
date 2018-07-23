import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import Calculator from './calculator.jsx';
import About from './about.jsx';

class LoggedInHome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return ( 
		<div>
			<div id="top-menu">
			  <NavLink to="/secure">Calculator</NavLink> | <NavLink to="/secure/about">About</NavLink> | <NavLink to="/logout">Logout</NavLink>
			</div>
			<Switch>
			  <Route exact path='/secure' component={Calculator} />
			  <Route path='/secure/about' component={About} />
			</Switch>
		</div>
	  );
	}
  }

export default LoggedInHome;