import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Login = ({ loggedIn, loginSuccess, loginFailed }) => 
{
	const clientId = document.head.querySelector("[name=google-signin-client_id]").content;

	return loggedIn ? <Redirect to="/" />
		: (
			<GoogleLogin 
				buttonText="Login"
				clientId={clientId}
				onSuccess={loginSuccess}
				onFailure={loginFailed} />
		);
}

Login.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	loginSuccess: PropTypes.func.isRequired,
	loginFailed: PropTypes.func.isRequired,
	authState: PropTypes.object.isRequired
};

export default Login;