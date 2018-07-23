import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { createDoLoginAction } from '../actions/authActions';

import LoggedInHome from '../presentational/loggedInHome.jsx';
import Login from '../presentational/login.jsx';
import RequireLogin from '../presentational/requireLogin.jsx';


class App extends React.Component {
	constructor(props) {
        super(props);
    }
	render() {
		let isLoggedIn = this.props.auth.loggedIn;
		return (
			<div>
				<h2>Over-Engineered Max HR Calculator</h2>
				<hr/>
				<Switch>
					<Route path='/secure' component={() => 
						/* If user is not logged in yet, the RequireLogin component will
							render a 'Redirect' to /login. */
						<RequireLogin loggedIn={isLoggedIn} loginRoute="/login">
							<div>
								<span>Logged in home</span>
								<LoggedInHome />
							</div>
						</RequireLogin>} 
					/>
					<Route path='/login' component={() => 
						<Login loggedIn={isLoggedIn} />} 
					/>
                    <Route exact path='/' component={() => <Redirect to="/secure" />} />
				</Switch>
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
	  auth: state.auth,
	  calculator: state.calculator
	}
  }
  
const mapDispatchToProps = dispatch => {
	return {
		doLogin: () => dispatch(createDoLoginAction())
	}
}

export default withRouter(
	connect(mapStateToProps,mapDispatchToProps)(App)
)