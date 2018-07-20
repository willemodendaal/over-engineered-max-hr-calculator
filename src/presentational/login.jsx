import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
	if (props.loggedIn) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<span>Is logged in already? {props.loggedIn}</span><br/>
			<button onClick={props.doLogin}>Login</button>
		</div>
	);
}

Login.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	doLogin: PropTypes.func.isRequired
};

export default Login;