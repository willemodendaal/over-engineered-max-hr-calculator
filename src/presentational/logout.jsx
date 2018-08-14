import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Logout = ({startLogout, authState}) => 
{
	if (!authState.status.logoutCallStatus)
	{
		startLogout();
		return <div>Logging out</div>
	}
	else if (authState.status.logoutCallStatus == 'failed')
	{
		return <div>Error logging out:{authState.status.errorMessage}</div>
	}
	else if (authState.status.logoutCallStatus == 'busy')
	{
		return <div>Logging out...</div>
	}

	console.log('Logout OK. Redirecting home...')
	return <Redirect to="/" />
}

Logout.propTypes = {
	startLogout: PropTypes.func.isRequired,
	authState: PropTypes.object.isRequired
};
export default Logout;