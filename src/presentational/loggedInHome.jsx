import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import Calculator from '../presentational/calculator.jsx';
import About from '../presentational/about.jsx';

class LoggedInHome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return ( 
		<div>
			<div id="top-menu">
			  <NavLink to="/">Calculator</NavLink> | <NavLink to="/about">About</NavLink>
			</div>
			<Switch>
			  <Route exact path='/' component={Calculator} />
			  <Route path='/about' component={About} />
			</Switch>
		</div>
	  );
	}
  }

export default LoggedInHome;