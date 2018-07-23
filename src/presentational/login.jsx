import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

//todo: Is there a way to do this without attaching to the 'window' object?
//  normal react function callbacks don't seem to work.
window.onSignIn = (googleUser) => {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId());
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail());
}
window.onSignInFailure = (err) => {
	console.log('Sign in failure!', err);
}

const Login = (props) => {
	if (props.loggedIn) {
		return <Redirect to="/secure" />
	}

	return (
		<div>
			<span>Is logged in already? {props.loggedIn}</span><br/>
			<div className="g-signin2" data-onsuccess="onSignIn" data-onfailure="onSignInFailure"></div>
		</div>
	);
}

Login.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	doLogin: PropTypes.func.isRequired
};

export default Login;