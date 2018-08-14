import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
		<div>
			<div>
				Hi {this.props.userName}
			</div>
			<div>
				Calculator component will be rendered here.	User will be redirected to login if not logged in yet.
			</div>
		</div>
	  );
	}
}

Calculator.propTypes = {
	userName: PropTypes.string.isRequired
};

export default Calculator;