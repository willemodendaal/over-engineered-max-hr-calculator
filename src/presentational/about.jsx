import React from 'react';

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
		<div>
			<h2>
				About
			</h2>
			<h3>
				Over Engineered Max HR Calculator
			</h3>
			<p>
				Max Heart Rate calculator built on a ridiculously over-engineered technology stack.
			</p>
			<p>
				The formula used is 205.8 – (.685 x age), proposed by Dr Jason R Karp.
			</p>

			<h3>
				But why so complicated?!
			</h3>
			<p>
				This project is actually meant to be a boilerplate project tying a couple of technologies together. The "Max HR calculator" part of it is just to give the project some usefulness (anything other than a todo list app!)
			</p>
		</div>
	  );
	}
  }

export default About;