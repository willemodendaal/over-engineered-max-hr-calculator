import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Calculator from './calculator.jsx';
import About from './about.jsx';

class LoggedInHome extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
	const calculator = ()=> <Calculator userName={this.props.userName} />

	return ( 
		<div>
			<div id="top-menu">
			  <NavLink to="/">Calculator</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/logout">Logout</NavLink>
			</div>
			<Switch>
				<Route exact path='/' component={calculator} />
				<Route path='/about' component={About} />
			</Switch>
		</div>
	  );
	}
}

LoggedInHome.propTypes = {
	userName: PropTypes.string.isRequired
};

export default LoggedInHome;