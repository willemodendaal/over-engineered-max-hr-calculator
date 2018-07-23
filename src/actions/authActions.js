export function createDoLoginAction(dispatch) {
	dispatch({type: 'LOGIN_COMPLETE'});
}

export function startLogout(dispatch)
{
	dispatch({type: 'LOGOUT_START'});
	window.gapi.auth2
		.getAuthInstance()
		.signOut()
		.then(() =>	dispatch({type: 'LOGOUT_COMPLETE'}))
		.catch((err) => dispatch({type: 'LOGOUT_FAILED', error: err}));
}