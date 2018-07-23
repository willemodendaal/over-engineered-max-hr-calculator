import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import LoggedInHome from '../presentational/loggedInHome.jsx';
import Login from '../presentational/login.jsx';
import Logout from '../presentational/logout.jsx';
import RequireLogin from '../presentational/requireLogin.jsx';
import { startLogout } from '../actions/authActions';


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

					<Route path='/logout' component={() => 
						<Logout startLogout={this.props.startLogout} authState={this.props.auth} />} 
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
		startLogout: () => startLogout(dispatch)
	}
}

export default withRouter(
	connect(mapStateToProps,mapDispatchToProps)(App)
)