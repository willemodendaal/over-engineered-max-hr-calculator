import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Renders child components if user is logged in, or redirects to login route. */
class Secure extends React.Component {
    render() {
        if (!this.props.loggedIn)
        {
            return <Redirect to="/login" />
        }
        return <div>{this.props.children}</div>
    }
}

Secure.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    loggedIn: PropTypes.bool.isRequired
};

export default Secure;