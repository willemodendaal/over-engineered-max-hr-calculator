import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
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