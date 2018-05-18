import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
    render() {
      return (
        <div>
          Hello there. This is a react component.
        </div>
      );
    }
  }

  ReactDOM.render(     
    <Hello />,
    document.getElementById('container')
  );

console.log('Scripts loaded ok!23');