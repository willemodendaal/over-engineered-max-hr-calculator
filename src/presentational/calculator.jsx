import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div>
              Calculator component will be rendered here.
              User will be redirected to login if not logged in yet.
          </div>
      );
    }
  }

export default Calculator;