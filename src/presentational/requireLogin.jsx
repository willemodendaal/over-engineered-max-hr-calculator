import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Renders child components if user is logged in, or redirects to login route. */
class RequireLogin extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (!this.props.loggedIn)
		{
			return <Redirect to={this.props.loginRoute} />
		}
		return <div>{this.props.children}</div>
	}
}

RequireLogin.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	loggedIn: PropTypes.bool.isRequired,
	loginRoute: PropTypes.string.isRequired
};

export default RequireLogin;