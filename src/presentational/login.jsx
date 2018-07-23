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

    Store.dispatch(createDoLoginAction(googleUser));
}
window.onSignInFailure = (err) => {
	console.log('Sign in failure!', err);
}

const Login = ({ loggedIn }) => 
	loggedIn ? <Redirect to="/secure" />
	: (
		//Is there a way to call a function instead of passing "onSignIn" as a string? The regular way
		//  of linking callbacks in React doesn't work here.
		<div>
			<span>Is logged in already? {loggedIn}</span><br/>
			<div className="g-signin2" data-onsuccess="onSignIn" data-onfailure="onSignInFailure"></div>
		</div>
	);

Login.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
};

export default Login;