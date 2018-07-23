import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Store from '../store/store';
import { createDoLoginAction } from '../actions/authActions';

//todo: Is there a way to do this without attaching to the 'window' object?
//  normal react function callbacks don't seem to work.
window.onSignIn = (googleUser) => {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId());
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail());

	createDoLoginAction(Store.dispatch);
}
window.onSignInFailure = (err) => {
	console.log('Sign in failure!', err);
}

const Login = ({ loggedIn }) => 
{
	if (window.gapi) {
		//Force login button to re-render, otherwise it's invisible if you login/logout and then login again.
		window.gapi.signin2.render('default-login-button', {});
	}

	return loggedIn ? <Redirect to="/secure" />
	: (
		//Is there a way to call a function instead of passing "onSignIn" as a string? The regular way
		//  of linking callbacks in React doesn't work here.
		<div>
			<div id="default-login-button" className="g-signin2" data-onsuccess="onSignIn" data-onfailure="onSignInFailure"></div>
		</div>
	);
}

Login.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
};

export default Login;