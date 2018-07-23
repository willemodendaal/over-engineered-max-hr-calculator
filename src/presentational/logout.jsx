import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Logout = ({startLogout, authState}) => 
{
	console.log('Loading logout component...')
	if (!authState.busyLoggingOut)
	{
		startLogout();
		return <div>{authState.message}</div>
	}

	console.log('Logout OK. Redirecting home...')
	return <Redirect to="/" />
}

Logout.propTypes = {
	startLogout: PropTypes.func.isRequired,
	authState: PropTypes.object.isRequired
};
export default Logout;