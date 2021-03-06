import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import LoggedInHome from '../presentational/loggedInHome.jsx';
import Login from '../presentational/login.jsx';
import Logout from '../presentational/logout.jsx';
import Header from '../presentational/header.jsx';
import RequireLogin from '../presentational/requireLogin.jsx';
import { startLogout, createLoginSucceededAction, createLoginFailedAction } from '../actions/authActions';


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	/*
						<Switch>
						<Route exact path='/' component={Calculator} />
						<Route path='/about' component={Login} />
					</Switch>
	*/
	
	render() {
		const isLoggedIn = this.props.auth.loggedIn;
		const logout = () => <Logout startLogout={this.props.startLogout} authState={this.props.auth} />
		const login = () => <Login loggedIn={isLoggedIn} loginSuccess={this.props.loginSuccess} loginFailed={this.props.loginFailed} authState={this.props.auth} />
		
		return (
			<div>
				<Header/>
				<Switch>
					<Route path='/logout' component={logout} />
					<Route path='/login' component={login} />
				</Switch>
				<RequireLogin loggedIn={isLoggedIn} loginRoute="/login">
					<LoggedInHome userName={this.props.auth.name} />
				</RequireLogin>
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
		startLogout: () => startLogout(dispatch),
		loginSuccess: (googleUser) => createLoginSucceededAction(dispatch, googleUser), 
		loginFailed: (err) => createLoginFailedAction(dispatch, err)
	}
}

export default withRouter(
	connect(mapStateToProps,mapDispatchToProps)(App)
)