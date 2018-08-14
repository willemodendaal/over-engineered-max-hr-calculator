export function createLoginSucceededAction(dispatch, googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId());
	console.log('Name: ' + profile.getName());
	
	dispatch({type: 'LOGIN_COMPLETE', userName: profile.getName()});
}

export function createLoginFailedAction(dispatch, err) {
	dispatch({type: 'LOGIN_FAILED', error: err});
}

export function startLogout(dispatch)
{
	dispatch({type: 'LOGOUT_START'});

	//Wait a second before starting logout, just for 
	//  more visual indication.
	setTimeout(
		() => window.gapi.auth2
			.getAuthInstance()
			.signOut()
			.then(() =>	dispatch({type: 'LOGOUT_COMPLETE'}))
			.catch((err) => dispatch({type: 'LOGOUT_FAILED', error: err})),
		1000);
}