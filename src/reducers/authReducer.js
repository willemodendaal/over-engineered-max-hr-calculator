const initialAuthState = 
{
	loggedIn: false,
	name: null,
	status: {
		loginCallStatus: null,
		errorMessage: null
	}
};

const reduceAuth = (oldState = initialAuthState, action) =>
{
	switch(action.type)
	{
		case 'LOGIN_COMPLETE':
			return Object.assign({}, oldState, {
				loggedIn: true,
				name: action.userName,
				status: {
					loginCallStatus: 'success',
					logoutCallStatus: null,
					errorMessage: null
				}
			});
		case 'LOGIN_FAILED':
			return Object.assign({}, oldState, {
				loggedIn: false,
				name: null, 
				status: {
					loginCallStatus: 'failed',
					logoutCallStatus: null,
					errorMessage: action.error
				}
			});

			
		case 'LOGOUT_START':
			return Object.assign({}, oldState, {
				status: {
					loginCallStatus: null,
					logoutCallStatus: 'busy',
					errorMessage: null
				}
			});
		case 'LOGOUT_COMPLETE':
			return Object.assign({}, oldState, {
				loggedIn: false,
				name: null, 
				status: {
					loginCallStatus: null,
					logoutCallStatus: 'success',
					errorMessage: null
				}
			});
		case 'LOGOUT_FAILED':
			return Object.assign({}, oldState, {
				loggedIn: false,
				name: null, 
				status: {
					loginCallStatus: null,
					logoutCallStatus: 'failed',
					errorMessage: action.error
				}
			});
	}
	return oldState;
}

export default reduceAuth;